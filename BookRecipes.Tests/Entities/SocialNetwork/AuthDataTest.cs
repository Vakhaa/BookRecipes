using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class AuthDataTest
    {
        [Fact]
        public void Constructor_AuthData_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var profileId = 1;
            var mail = "expected@mail.com"; 
            var password = "expected";
            // Act
            // Run method which should be tested

            var result = new AuthData(profileId, mail, password);
            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Equal(mail, result.Mail);
            Assert.Equal(password, result.Password);
        }
    }
}
