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
    public class IngredientsController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly IngredientController _ingredientController;

        public IngredientsController(IngredientController ingredientController, ILogger<BookController> logger)
        {
            _ingredientController = ingredientController;
            _logger = logger;
        }
        // GET: api/<IngredientsController>/Ingredients
        [HttpGet("Ingredients")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Ingredient>>> GetIngredientAsync()
        {
            return new ObjectResult(await _ingredientController.GetIngredientsAsync());
        }

        // GET: api/<IngredientsController>/Ingredient/id
        [HttpGet("Ingredient/{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Ingredient>>> GetIngredientByIdAsync(int id)
        {
            return new ObjectResult(await _ingredientController.GetIngredientByIdAsync(id));
        }
        /*
                // POST api/<IngredientsController>
                [HttpPost]
                public void Post([FromBody] string value)
                {
                }

                // PUT api/<IngredientsController>/5
                [HttpPut("{id}")]
                public void Put(int id, [FromBody] string value)
                {
                }

                // DELETE api/<IngredientsController>/5
                [HttpDelete("{id}")]
                public void Delete(int id)
                {
                }*/
    }
}
