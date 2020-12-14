using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class IngredientController
    {
        private IUnitOfWork _unitOfWork;
        public IngredientController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Загрузка списка ингредиентов.
        /// </summary>
        /// <returns>Список ингредиентов.</returns>
        public Task<IEnumerable<Ingredient>> GetIngredientsAsync()
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<Ingredient>(i=>i.IngredientsInRecipe);
        }
        /// <summary>
        /// Добавляет ингредиенты и возвращает его.
        /// </summary
        /// <param name="answer">Переменная для обработки ответа пользователя.</param>
        public async Task<int> AddedIfNewAsync(string answer)
        {
            var result = await FindAndGetIngredientAsync(answer);
            if (result != null)
            {
                return result.Id;
            }
            else
            {
                var newIngredient = await _unitOfWork.Repository.AddAsync(new Ingredient(answer));
                return newIngredient.Id;
            }
        }
        /// <summary>
        /// Поиск ингредиента.
        /// </summary>
        /// <param name="nameIngredient">Название ингредиента.</param>
        /// <returns>Ингредиент.</returns>
        public Task<Ingredient> FindAndGetIngredientAsync(string nameIngredient)
        {
            return _unitOfWork.Repository
                .GetWithIncludeEntityAsync<Ingredient>(i => i.Name.ToLower() == nameIngredient.ToLower(), i => i.IngredientsInRecipe);
        }
        public Task<Ingredient> GetIngredientByIdAsync(int ingredientId)
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<Ingredient>(i => i.Id == ingredientId, i=>i.IngredientsInRecipe);
        }
    }
}
