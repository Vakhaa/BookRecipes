using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities
{
    public class StepsInRecipe : BaseEntity
    {
        public int RecipeId { get; set; }
        public string Description { get; set; }
        public Recipe Recipe { get; set; }
        public StepsInRecipe() { }
        public StepsInRecipe(int recipeId, string description)
        {
            if (recipeId != 0)
            {
                //Prowerki
                RecipeId = recipeId;
                Description = description;
            }
        }
    }
}
