using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class MyRecipesTest
    {
        [Fact]
        public void Constructor_MyRecipes_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var currentUserId = 1;
            var recipeId = 2;

            // Act
            // Run method which should be tested

            var result = new MyRecipes(currentUserId, recipeId);
            // Assert
            Assert.Equal(currentUserId, result.ProfileId);
            Assert.Equal(recipeId, result.RecipeId);
        }
    }
}
