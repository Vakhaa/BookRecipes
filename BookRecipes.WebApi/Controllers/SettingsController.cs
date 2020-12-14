using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly CategoryController _categoryController;
        private readonly RecipeController _recipeController;
        private readonly IngredientController _ingredientController;

        public SettingsController(CategoryController categoryController, RecipeController recipeController, IngredientController ingredientController, ILogger<BookController> logger)
        {
            _categoryController = categoryController;
            _recipeController = recipeController;
            _ingredientController = ingredientController;
            _logger = logger;
        }
        // GET: api/<SettingsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SettingsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SettingsController>/AddCategory
        [HttpPost("AddCategory")]
        public async Task<ActionResult<Category>> PostAddCategoryAsync(int categoryId, string subcategoryName)
        {
            _categoryController.CurrentCategory =await _categoryController.AddChildAsync(categoryId, subcategoryName);
            return Ok(_categoryController.CurrentCategory);
        }
        
        // POST api/<SettingsController>/AddIngredient
        [HttpPost("AddIngredient")]
        public async Task<IActionResult> PostAddIngredientAsync(string name)
        {
            await _ingredientController.AddedIfNewAsync(name);
            return Ok();
        }

        // POST api/<SettingsController>/AddRecipe
        [HttpPost("AddRecipe")]
        public async Task<ActionResult<Recipe>> PostAddRecipeAsync(
            [FromQuery]string recipeName, [FromQuery] string categoryId, [FromQuery] string description,
            [FromQuery] List<string> ingredients, [FromQuery] List<string> countIngredients, [FromQuery] List<string> stepsHowCooking)
        {
            await _categoryController.WalkCategoriesAsync(categoryId);
            var categoryNew = _categoryController.CurrentCategory;
            if (categoryNew == null)
            {
                throw new ArgumentException(nameof(categoryNew), "Null categoryNew in new Recipe");
            }

            var ingredientsId = new List<int>();
            foreach (var name in ingredients)
            {
                ingredientsId.Add(await _ingredientController.AddedIfNewAsync(name));
            }

            await _recipeController.CreateRecipeAsync(recipeName, categoryNew.Id, description);
            await _recipeController.AddedIngredientsInRecipeAsync(ingredientsId, countIngredients);
            await _recipeController.AddedStepsInRecipeAsync(stepsHowCooking);
            return Ok(_recipeController.CurrentRecipe);
        }

        // PUT api/<SettingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SettingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
