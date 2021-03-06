using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class PostController
    {
        private IUnitOfWork _unitOfWork;
        
        public PostController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Posts of current user.
        /// </summary>
        /// <returns>Posts.</returns>
        public Task<IEnumerable<Posts>> GetUserPostsAsync(int currentUserid)
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<Posts>
                (c=> c.ProfileId == currentUserid, c => c.Author , c=> c.Author.Photos);
        }
        public Task<Posts> AddPostsAsync(int profileId, string title, string body, int? authorId = null)
        {
            return _unitOfWork.Repository.AddAsync(new Posts(profileId, title, body, authorId));
        }
    }
}
