using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;

namespace BookRecipes.WebApi.Extensions.Attributes
{
    [AttributeUsage(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    public class AuthorizationFilterAttribute : Attribute, IAsyncActionFilter
    {
        public Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            try
            {
                var token = context.HttpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                var tokenValidationParameters = context.HttpContext.RequestServices.GetService(typeof(TokenValidationParameters));
                
                var validatedToken = ValidatedToken(token, (TokenValidationParameters)tokenValidationParameters);

                var jti = validatedToken.Claims.SingleOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;
                context.HttpContext.Items.Add("jti", jti);

                var expiryDateUnix =
                long.Parse(validatedToken.Claims.SingleOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
                var expiryDateTimeUtc = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                    .AddSeconds(expiryDateUnix);

                if (expiryDateTimeUtc < DateTime.UtcNow)
                {
                    context.HttpContext.Response.StatusCode = 401;
                    context.HttpContext.Items.Add("isExpiredToken", false);
                }
                else
                {
                    context.HttpContext.Response.StatusCode = 200;
                    context.HttpContext.Items.Add("isExpiredToken", true);
                }

            }
            catch (SecurityTokenValidationException error)
            {
                context.HttpContext.Response.StatusCode = 401;
            }
            catch (Exception error)
            {
                context.HttpContext.Response.StatusCode = 400;
            }
            return next.Invoke();
        }

        private ClaimsPrincipal ValidatedToken(string token, TokenValidationParameters tokenValidationParams)
        {
            var validatedToken = GetPrincipalFromToken(token, tokenValidationParams);

            if (validatedToken == null)
            {
                throw new SecurityTokenValidationException("Invalid token");
            }

            return validatedToken;
        }

        private ClaimsPrincipal GetPrincipalFromToken(string token, TokenValidationParameters tokenValidationParams)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                var principal = tokenHandler.ValidateToken(token, tokenValidationParams, out var validatedToken);

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
