using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class MyRecipesController
    {
        private IUnitOfWork _unitOfWork;
        /// <summary>
        /// Активная категория.
        /// </summary>
        public Profile CurrentCategory { get; set; }
        public MyRecipesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Загрузка списка категорий в приложение.
        /// </summary>
        /// <returns>Список категорий.</returns>
        public Task<MyRecipes> GetMyRecipeByIdAsync(int recipeId)
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<MyRecipes>(c=>c.RecipeId== recipeId);
        }

        public Task<IEnumerable<MyRecipes>> GetMyRecipesAsync(int userId)
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<MyRecipes>(c=>c.ProfileId==userId);
        }
    }
}
