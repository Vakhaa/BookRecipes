//using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BookRecipes.Infrastructure.Identity;
using BookRecipes.SharedKernel.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace BookRecipes.Infrastructure.Token
{
    public class JwtGenerator : IJwtGenerator
    {
        private readonly JwtBearerTokenSettings _jwtBearerTokenSettings;
        private IUnitOfWork _unitOfWork { get; }

        public JwtGenerator(
            IUnitOfWork unitOfWork,
            IOptions<JwtBearerTokenSettings> jwtTokenOptions)//, IConfiguration Configuration)
        {
            _unitOfWork = unitOfWork;
            _jwtBearerTokenSettings = jwtTokenOptions.Value;
            //_key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenKey"]));
        }

        public SecurityToken CreateToken(AppUser user)
        {
            var key = Encoding.ASCII.GetBytes(_jwtBearerTokenSettings.SecretKey);

            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("userId", user.Id),
            };
            var lifeTime = DateTime.UtcNow.AddSeconds(_jwtBearerTokenSettings.ExpiryTimeInSeconds);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),

                Expires = lifeTime,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = _jwtBearerTokenSettings.Audience,
                Issuer = _jwtBearerTokenSettings.Issuer,
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return token;
        }
        
        private async Task<string> CreateRefreshTokenAsync(AppUser user, string tokenId)
        {
            var refreshToken = new RefreshToken()
            {
                JwtJti = tokenId,
                UserId = user.Id,
                CreationDate = DateTime.UtcNow,
                ExpiryDate = DateTime.UtcNow.AddDays(6)
            };
     
            //save refreshToken into db
            await _unitOfWork.Repository.AddAsync(refreshToken);

            return refreshToken.Token;
        }

        public async Task<TokensRequest> CreateTokenAndRefreshTokenAsync(AppUser user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = CreateToken(user); 

            return new TokensRequest
            {
                AccessToken = tokenHandler.WriteToken(token),
                RefreshToken = await CreateRefreshTokenAsync(user, token.Id)
            };
        }
    }
}
