using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class MessagesTest
    {
        [Fact]
        public void Constructor_Messages_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var authorId = 1;
            var recipientId = 2;
            var message = "expected2";

            // Act
            // Run method which should be tested

            var result = new Messages(authorId, recipientId, message);
            // Assert
            Assert.Equal(authorId, result.AuthorId);
            Assert.Equal(recipientId, result.RecipientId);
            Assert.Equal(message, result.Message);
        }
    }
}
