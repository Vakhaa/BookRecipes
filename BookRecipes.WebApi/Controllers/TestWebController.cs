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

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")] //, Name =("[controller]_[action]")
    [ApiController]
    public class TestWebController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly TestController _testController;

        [BindProperty]
        public List<int> IngredientId { get; set; }

        public TestWebController(TestController testController, ILogger<BookController> logger)
        {
            _testController = testController;
            _logger = logger;
        }

        // GET: api/<TestController>/test
        [HttpGet("Test")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Profile>>> GetTestAsync()
        {
            var test = await _testController.GetProfileAsync();
           // return JsonConvert.DeserializeObject();//new ObjectResult("[{'name':'mema'}]"); //JsonConvert.DeserializeObject()
            return new ObjectResult(test);//new ObjectResult("[{'name':'mema'}]"); //JsonConvert.DeserializeObject()
        }

    }
}

