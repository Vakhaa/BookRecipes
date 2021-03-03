using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class MyRecipesController
    {
        private IUnitOfWork _unitOfWork;
        public MyRecipesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Current recipe with user.
        /// </summary>
        /// <returns>Recipes with his author.</returns>
        public Task<MyRecipes> GetMyRecipeByIdAsync(int recipeId)
        { // на самом то деле рецепт можно достать через RecipeController и с автором, нужно дбавить делегат
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<MyRecipes>(c=>c.RecipeId== recipeId);
        }
        /// <summary>
        /// Collection recipes current user.
        /// </summary>
        /// <returns>Collection recipes.</returns>
        public Task<IEnumerable<MyRecipes>> GetMyRecipesAsync(int userId)
        { //Возможно и этот метод стоит туда переместить 
            return _unitOfWork.Repository.GetWithIncludeListAsync<MyRecipes>(c=>c.ProfileId==userId);
        }
    }
}
