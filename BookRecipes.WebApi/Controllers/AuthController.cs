using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.Infrastructure.Identity;
using BookRecipes.Infrastructure.Identity.Controller;
using BookRecipes.Infrastructure.Token;
using BookRecipes.Core.Controllers;
using BookRecipes.WebApi.Extensions.Attributes;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJwtGenerator _jwtGenerator;
        private readonly ILogger<BookController> _logger;
        private readonly LoginController _loginController;
        private readonly CurrentProfileController _profileController;

        public AuthController(LoginController loginController,
            CurrentProfileController profileController,
            IJwtGenerator jwtGenerator,
            ILogger<BookController> logger)
        {
            _profileController = profileController;
            _jwtGenerator = jwtGenerator;
            _loginController = loginController;
            _logger = logger;
        }

        [HttpPost("")]
        [Produces("application/json")]
        public async Task<ActionResult<AppUser>> AuthAsync(AuthData query)
        {
            try
            {
                var user = await _loginController.AuthAsync(query, CancellationToken.None);
                var profile = await _profileController.GetProfileByNameAsync(user.UserName); // change on login 

                var tokens = await _jwtGenerator.CreateTokenAndRefreshTokenAsync(user);

                if (user!=null)
                {
                    var response = new
                    {
                        isAuth = true,
                        login = user.UserName,
                        userId = profile.Id,
                        accessToken = tokens.AccessToken,
                        refreshToken = tokens.RefreshToken,
                    };
                    return Ok(response);
                }
                else
                {
                    var response = new
                    {
                        isAuth = false,
                        message = "wrong password or login"
                    };
                    return Unauthorized(response);
                }
            }
            catch(Exception error)
            {
                return BadRequest(error); 
            }
        }

        [HttpDelete("Logout")]
        [Produces("application/json")]
        public async Task<IActionResult> LogoutAsync()
        {
            try
            {
                await _loginController.LogoutAsync();
                return Ok(new { accessToken = "", message = "Logged Out" });
            }
            catch(Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpPost("Register")]
        [Produces("application/json")]
        public async Task<IActionResult> RegisterAsync(AuthData query)
        {
            try
            {
                var response = await _loginController.RegisterAsync(query.Mail, query.Password);
                if (!response.Succeeded)
                {
                    return Unauthorized(response.Errors);
                }
                return Ok();
            }catch(Exception e)
            {
                return Unauthorized(e);
            }
        }

        [HttpPut("Refresh")]
        [Produces("application/json")]
        public async Task<IActionResult> RefreshAsync([FromForm] string refreshToken)
        {
            var isExpiredToken = (bool)HttpContext.Items["isExpiredToken"];

            if (isExpiredToken) return BadRequest("Token is alive");
            try
            {
                var jti = (string)HttpContext.Items["jti"];

                var user = await _loginController.RefreshTokenAsync(jti, refreshToken);

                var tokens = await _jwtGenerator.CreateTokenAndRefreshTokenAsync(user);

                return Ok(new
                {
                    accessToken = tokens.AccessToken,
                    refreshToken = tokens.RefreshToken
                });
            }
            catch (Exception e)
            {
                return Unauthorized(e.Message);
            }
        }
        
        [HttpGet("TestAuth")]
        [Produces("application/json")]
        [TokenAuthorizationFilter]
        public async Task<ActionResult<string>> TestsAuthAsync()
        {
            var isAuthorizated = (bool)HttpContext.Items["isAuthorizated"];
            if(isAuthorizated)
            {
                return Ok("Test okay");
            }else{
                return Unauthorized();
            }
        }

        //
        private string decodeToken(string token)
        {
            var bearer = token.IndexOf(" ");

            var part = token.Substring(bearer).Split('.');

            var bytes = Convert.FromBase64String(part[1]);
            var encode = Encoding.ASCII.GetString(bytes);
            return encode;
        }
        
        private object getUserId(string token)
        {
            dynamic result = JsonConvert.DeserializeObject(decodeToken(token));
            var r = result["jti"];
            return r;
        }
    }
}
