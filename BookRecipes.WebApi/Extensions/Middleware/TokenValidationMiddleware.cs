using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;

namespace BookRecipes.WebApi.Extensions.Middleware
{
    public class TokenValidationMiddleware 
    {
        private readonly RequestDelegate _next;

        private readonly TokenValidationParameters _tokenValidationParams;

        public TokenValidationMiddleware(RequestDelegate next, 
            TokenValidationParameters tokenValidationParams)
        {
            _next = next;
            _tokenValidationParams = tokenValidationParams;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                var validatedToken = ValidatedToken(token);
                
                var jti = validatedToken.Claims.SingleOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;
                context.Items.Add("jti", jti);

                var expiryDateUnix =
                long.Parse(validatedToken.Claims.SingleOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
                var expiryDateTimeUtc = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                    .AddSeconds(expiryDateUnix);

                if (expiryDateTimeUtc < DateTime.UtcNow)
                {
                    context.Response.StatusCode = 403;
                    context.Items.Add("isExpiredToken", false);
                }
                else
                {
                    context.Response.StatusCode = 200;
                    context.Items.Add("isExpiredToken", true);
                }

            }
            catch (SecurityTokenValidationException error)
            {
                context.Response.StatusCode = 403;
            }
            catch (Exception error)
            {
                context.Response.StatusCode = 400;
            }
            await _next(context);
        }

        private ClaimsPrincipal ValidatedToken(string token)
        {
            var validatedToken = GetPrincipalFromToken(token);

            if (validatedToken == null)
            {
                throw new SecurityTokenValidationException("Invalid token");
            }

            return validatedToken;
        }

        private ClaimsPrincipal GetPrincipalFromToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                var principal = tokenHandler.ValidateToken(token, _tokenValidationParams, out var validatedToken);

                if (!IsJwtWithValidSecurityAlgorithm(validatedToken))
                {
                    return null;
                }

                return principal;
            }
            catch
            {
                return null;
            }
        }

        private bool IsJwtWithValidSecurityAlgorithm(SecurityToken validatedToken)
        {
            return (validatedToken is JwtSecurityToken jwtSecurityToken) &&
                   jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256,
                       StringComparison.InvariantCultureIgnoreCase);
        }

    }
}
