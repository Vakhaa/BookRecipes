using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class MessageController
    {
        private IUnitOfWork _unitOfWork;
        
        public MessageController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Messages friend of current user.
        /// </summary>
        /// <returns>Messages.</returns>
        public Task<IEnumerable<Messages>> GetFriendMessageAsync(int currentUserid, int friendId)
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<Messages>
                (c=> (c.AuthorId == currentUserid && c.RecipientId==friendId) || (c.RecipientId == currentUserid && c.AuthorId==friendId));
        }
    }
}
