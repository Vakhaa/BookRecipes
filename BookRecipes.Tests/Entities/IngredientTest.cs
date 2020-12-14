using BookRecipes.Core.Entities;
using Xunit;

namespace BookRecipes.Tests.Entities
{
    public class IngredientTest
    {
        [Fact]
        public void Constructor_Ingredient_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var name = "expected";

            // Act
            // Run method which should be tested

            var newEntity = new Ingredient(name);
            // Assert
            Assert.Equal(name, newEntity.Name);
        }
    }
}
