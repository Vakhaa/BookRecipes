using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities;
using BookRecipes.SharedKernel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")] //, Name =("[controller]_[action]")
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly CategoryController _categoryController;
        private readonly RecipeController _recipeController;
        private readonly IngredientController _ingredientController;

        [BindProperty]
        public List<int> IngredientId { get; set; }

        public BookController(CategoryController categoryController, RecipeController recipeController, IngredientController ingredientController, ILogger<BookController> logger)
        {
            _categoryController = categoryController;
            _recipeController = recipeController;
            _ingredientController = ingredientController;
            _logger = logger;
        }

        // GET: api/<BookController>/CategoriesParent
        [HttpGet("CategoriesParent")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Category>>> GetCategoriesParentAsync()
        {
            return new ObjectResult(await _categoryController.GetCategoriesAsync());
        }

        // GET: api/<BookController>/CategoriesChild
        [HttpGet("CategoriesChild")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Category>>> GetCategoriesChildAsync()
        {
            return new ObjectResult(await _categoryController.GetAllChildAsync());
        }

        // GET: api/<BookController>/Recipes
        [HttpGet("Recipes")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Recipe>>> GetRecipesAsync()
        {
            return new ObjectResult(await _recipeController.GetRecipesAsync());
        }

        // GET api/<BookController>/Recipe/5
        [HttpGet("Recipe/{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<Recipe>> GetRecipeAsync(int id)
        {
            var Recipe = await _recipeController.FindRecipeAsync(id);
            return new ObjectResult(Recipe);
        }

        //POST api/<BookController>/ Ingredients
        [HttpPost("Ingredients")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Ingredient>>> PostIngredientAsync()
        {
            List<Ingredient> ingredients = new List<Ingredient>();
            foreach (var item in IngredientId)
            {
                ingredients.Add(await _ingredientController.GetIngredientByIdAsync(item));
            }
            IngredientId.Clear();
            return new ObjectResult(ingredients);
        }

        /*// POST api/<BookController>
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostAsync([FromBody] string value)
        {
            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }*/

        /*// PUT api/<BookController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BookController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}

