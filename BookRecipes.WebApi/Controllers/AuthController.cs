using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly LoginController _loginController;


        public AuthController(LoginController loginController, ILogger<BookController> logger)
        {
            _loginController = loginController;
            _logger = logger;
        }

        [HttpGet("")]
        [Produces("application/json")]
        public async Task<ActionResult<object>> GetAuthAsync(string login, string password)
        {
            var response = await _loginController.GetAuthAsync(login, password);
            string auth = "";

            if(response!=null)
            {
                auth = "{" +
                "'userId':'" + response.ProfileId + "'," +
                "'isAuth': true ," +
                "'login': '" + response.Mail + "'" +
                "}";
            }
            else
            {
                auth = "{" +
                    "'isAuth': false," +
                    "'message': 'wrong password or login'," +
                    "}";
            }
            return JsonConvert.DeserializeObject(auth);
        }
    }
}
