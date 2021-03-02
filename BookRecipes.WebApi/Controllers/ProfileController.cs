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
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly CurrentProfileController _profileController;
        private readonly MyRecipesController _myRecipesController;


        public ProfileController(CurrentProfileController profileController, MyRecipesController myRecipesController,ILogger<BookController> logger)
        {
            _profileController = profileController;
            _myRecipesController = myRecipesController;
            _logger = logger;
        }

        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Profile>>> GetProfileAsync(int id)
        {
            return new ObjectResult(await _profileController.GetProfileAsync(id));
        }
        
        [HttpGet("{id}/MyRecipes")]
        [Produces("application/json")]
        public async Task<ActionResult<List<MyRecipes>>> GetMyRecipesAsync(int id)
        {
            return new ObjectResult(await _myRecipesController.GetMyRecipesAsync(id));
        }
        
        [HttpGet("MyRecipe")]
        [Produces("application/json")]
        public async Task<ActionResult<MyRecipes>> GetMyRecipeByIdAsync(int recipeId)
        {
            return new ObjectResult(await _myRecipesController.GetMyRecipeByIdAsync(recipeId));
        }
    }
}
