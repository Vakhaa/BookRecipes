using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class FriendsTest
    {
        [Fact]
        public void Constructor_Friends_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var currentUserId = 1;
            var friendId = 2;

            // Act
            // Run method which should be tested

            var result = new Friends(currentUserId, friendId);
            // Assert
            Assert.Equal(currentUserId, result.CurrentUserId);
            Assert.Equal(friendId, result.FriendId);
        }
    }
}
