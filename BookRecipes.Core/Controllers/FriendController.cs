using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class FriendController
    {
        private IUnitOfWork _unitOfWork;
        
        public FriendController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Collection Friends of current user.
        /// </summary>
        /// <returns>Collection friends.</returns>
        public Task<IEnumerable<Friends>> GetFriendsAsync(int currentUserid)
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<Friends>
                (c=>c.CurrentUserId== currentUserid, c=>c.Friend, c=> c.Friend.Photos);
        }
        /// <summary>
        /// Current Friends of current user.
        /// </summary>
        /// <returns>Current friend.</returns>
        public Task<Friends> GetFriendByIdAsync(int currentUserid, int friendsId)
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<Friends>
                (c=>c.CurrentUserId== currentUserid && c.FriendId ==friendsId, c=>c.Friend);
        }
    }
}
