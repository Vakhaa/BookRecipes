using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BookRecipes.Infrastructure.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace BookRecipes.Infrastructure.Token
{
    public class JwtGenerator : IJwtGenerator
    {
        private readonly SymmetricSecurityKey _key;
        private readonly JwtBearerTokenSettings _jwtBearerTokenSettings;

        public JwtGenerator(IOptions<JwtBearerTokenSettings> jwtTokenOptions)//, IConfiguration Configuration)
        {
            _jwtBearerTokenSettings = jwtTokenOptions.Value;
            //_key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenKey"]));
        }

        public string CreateToken(AppUser user)
        {
            var key = Encoding.ASCII.GetBytes(_jwtBearerTokenSettings.SecretKey);

            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),

                Expires = DateTime.UtcNow.AddSeconds(_jwtBearerTokenSettings.ExpiryTimeInSeconds),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = _jwtBearerTokenSettings.Audience,
                Issuer = _jwtBearerTokenSettings.Issuer,
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);
            
            return tokenHandler.WriteToken(token);
        }
    }
}
