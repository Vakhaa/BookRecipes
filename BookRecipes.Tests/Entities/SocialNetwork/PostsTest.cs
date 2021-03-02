using BookRecipes.Core.Entities.SocialNetwork;
using Xunit;

namespace BookRecipes.Tests.Entities.SocialNetwork
{
    public class PostsTest
    {
        [Fact]
        public void Constructor_Posts_IfDataCorrect_CreateEntity()
        {
            // Arrange
            var profileId = 1;
            var authorId = 1;
            var title = "expected2";
            var body = "expected3";

            // Act
            // Run method which should be tested

            var result = new Posts(profileId, title, body, authorId);
            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Equal(title, result.Title);
            Assert.Equal(body, result.Body);
            Assert.Equal(authorId, result.AuthorId);
            Assert.NotEmpty(result.Date);
            Assert.NotEmpty(result.Time);
        }

        [Fact]
        public void Constructor_Posts_IfDataCorrect_AndAuthorIdIsNull_CreateEntity()
        {
            // Arrange
            var profileId = 1;
            var title = "expected2";
            var body = "expected3";

            // Act
            // Run method which should be tested

            var result = new Posts(profileId, title, body);
            // Assert
            Assert.Equal(profileId, result.ProfileId);
            Assert.Equal(title, result.Title);
            Assert.Equal(body, result.Body);
            Assert.Null(result.AuthorId);
            Assert.NotEmpty(result.Date);
            Assert.NotEmpty(result.Time);
        }
    }
}
