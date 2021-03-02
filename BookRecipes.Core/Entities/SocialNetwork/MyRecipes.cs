using System;
using BookRecipes.SharedKernel;
using BookRecipes.Core.Entities;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class MyRecipes : BaseEntity
    {
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }

        public MyRecipes() { }
        public MyRecipes(int profileId, int recipeId)
        {
            if (profileId == 0)
            {
                throw new ArgumentNullException(nameof(profileId), "Must be profile Id");
            }

            if (recipeId == 0)
            {
                throw new ArgumentNullException(nameof(recipeId), "Must be recipe Id");
            }
            ProfileId = profileId;
            RecipeId = recipeId;
        }
    }
}
