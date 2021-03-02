using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class ProfileTest
    {
        [Fact]
        public void Constructor_Profile_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var name = "expected1";
            var surname = "expected2";
            var description = "expected3";
            var status = "expected4";
            var authId = 1;
            var socialNetworksId = 1;
            var profilePhotosId = 1;

            // Act
            // Run method which should be tested

            var result = new Profile(name, surname,description, status, authId, socialNetworksId, profilePhotosId);
            // Assert
            Assert.Equal(name, result.Name);
            Assert.Equal(surname, result.Surname);
            Assert.Equal(description, result.Description);
            Assert.Equal(status, result.Status);
            Assert.Equal(authId, result.AuthId);
            Assert.Equal(socialNetworksId, result.SocialNetworksId);
            Assert.Equal(profilePhotosId, result.ProfilePhotosId);
        }

        [Fact]
        public void Constructor_Profile_IfDataCorrect_AndProfilePhotosIdIsNull_CreateEntity()
        {
            // Arrange
            var name = "expected1";
            var surname = "expected2";
            var description = "expected3";
            var status = "expected4";
            var authId = 1;
            var socialNetworksId = 1;
            int? profilePhotosId = null;

            // Act
            // Run method which should be tested

            var result = new Profile(name, surname, description, status, authId, socialNetworksId, profilePhotosId);
            // Assert
            Assert.Equal(name, result.Name);
            Assert.Equal(surname, result.Surname);
            Assert.Equal(description, result.Description);
            Assert.Equal(status, result.Status);
            Assert.Equal(authId, result.AuthId);
            Assert.Equal(socialNetworksId, result.SocialNetworksId);
            Assert.Null(result.ProfilePhotosId);
        }
        
        [Fact]
        public void Constructor_Profile_IfDataCorrect_AndStatusIsNull_CreateEntity()
        {
            // Arrange
            var name = "expected1";
            var surname = "expected2";
            var description = "expected3";
            var authId = 1;
            var socialNetworksId = 1;
            int? profilePhotosId = null;

            // Act
            // Run method which should be tested

            var result = new Profile(name, surname, description, null, authId, socialNetworksId, profilePhotosId);
            // Assert
            Assert.Equal(name, result.Name);
            Assert.Equal(surname, result.Surname);
            Assert.Equal(description, result.Description);
            Assert.Equal("Change your status ;)", result.Status);
            Assert.Equal(authId, result.AuthId);
            Assert.Equal(socialNetworksId, result.SocialNetworksId);
            Assert.Null(result.ProfilePhotosId);
        }
        
        [Fact]
        public void Constructor_Profile_IfDataCorrect_AndStatusIsEmpty_CreateEntity()
        {
            // Arrange
            var name = "expected1";
            var surname = "expected2";
            var description = "expected3";
            var authId = 1;
            var socialNetworksId = 1;
            int? profilePhotosId = null;

            // Act
            // Run method which should be tested

            var result = new Profile(name, surname, description, "", authId, socialNetworksId, profilePhotosId);
            // Assert
            Assert.Equal(name, result.Name);
            Assert.Equal(surname, result.Surname);
            Assert.Equal(description, result.Description);
            Assert.Equal("Change your status ;)", result.Status);
            Assert.Equal(authId, result.AuthId);
            Assert.Equal(socialNetworksId, result.SocialNetworksId);
            Assert.Null(result.ProfilePhotosId);
        }
    }
}
