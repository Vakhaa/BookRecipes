using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.WebApi.Extensions.Attributes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AuthorizationFilter]
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
        [TokenAuthorizationFilter]
        public async Task<ActionResult<List<Profile>>> GetProfileAsync(int id)
        {
            var isAuthorizated = (bool)HttpContext.Items["isAuthorizated"];
            if (!isAuthorizated)
            {
                return Unauthorized("You are don't authorized!");
            }
            else
            {
                return Ok(await _profileController.GetProfileByIdAsync(id));
            }
        }
        
        [HttpGet("{id}/MyRecipes")]
        [Produces("application/json")]
        [MyAllowAnonymousFilter] // nu i eto tut nae nado
        public async Task<ActionResult<List<MyRecipes>>> GetMyRecipesAsync(int id)
        {
            return Ok(await _myRecipesController.GetMyRecipesAsync(id));
        }
        
        [HttpGet("MyRecipe")]
        [Produces("application/json")]
        [MyAllowAnonymousFilter]
        public async Task<ActionResult<MyRecipes>> GetMyRecipeByIdAsync(int recipeId)
        {
            return Ok(await _myRecipesController.GetMyRecipeByIdAsync(recipeId));
        }
    }
}
