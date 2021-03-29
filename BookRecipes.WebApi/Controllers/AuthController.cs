using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.Infrastructure.Identity;
using BookRecipes.Infrastructure.Identity.Controller;
using BookRecipes.Infrastructure.Token;
using BookRecipes.Core.Controllers;

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
                if(user!=null)
                {
                    var response = new
                    {
                        isAuth = true,
                        login = user.UserName,
                        userId = profile.Id,
                        accessToken = _jwtGenerator.CreateToken(user),
                        /*refreshToken = _jwtGenerator.CreateRefreshToken()*/
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
            //From Cookie we can take few data
            /*var identityCookie = HttpContext.Request.Cookies["Grandpa.Cookie"];
            var token = HttpContext.Request.Headers["Authorization"];
            var userId = getUserId(token);*/

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
        public async Task<ActionResult<bool>> RegisterAsync(AuthData query)
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

        [Authorize]
        [HttpGet("TestAuth")]
        [Produces("application/json")]
        public async Task<ActionResult<string>> TestsAuthAsync()
        {
            return Ok("Test okay");
        }

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
