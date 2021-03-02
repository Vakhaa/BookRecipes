using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class ProfilePhotosTest
    {
        [Fact]
        public void Constructor_ProfilePhotos_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var profileId = 1;
            var small = "expected1";
            var large = "expected2";

            // Act
            // Run method which should be tested

            var result = new ProfilePhotos(profileId, small, large);

            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Equal(small, result.SmallPhoto);
            Assert.Equal(large, result.LargePhoto);
        }
    }
}
