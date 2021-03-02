using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class SocialNetworksDataTest
    {
        [Fact]
        public void Constructor_SocialNetworksData_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var profileId = 1;
            var github = "expected1";
            var telegram = "expected2";
            var facebook = "expected3";
            var instagram = "expected4";
            var youtube = "expected5";
            var other = "expected6";

            // Act
            // Run method which should be tested

            var result = new SocialNetworksData(profileId, github, telegram, facebook, instagram, youtube, other);

            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Equal(github, result.GitHub);
            Assert.Equal(telegram, result.Telegram);
            Assert.Equal(facebook, result.Facebook);
            Assert.Equal(instagram, result.Instagram);
            Assert.Equal(youtube, result.Youtube);
            Assert.Equal(other, result.OtherSocialNetwork);
        }
        [Fact]
        public void Constructor_SocialNetworksData_IfDataEmpty_CreateEntity()
        {
            // Arrange
            var profileId = 1;

            // Act
            // Run method which should be tested

            var result = new SocialNetworksData(profileId, null, "", "", "", "", "");

            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Null(result.GitHub);
            Assert.Null(result.Telegram);
            Assert.Null(result.Facebook);
            Assert.Null(result.Instagram);
            Assert.Null(result.Youtube);
            Assert.Null(result.OtherSocialNetwork);
        }
    }
}
