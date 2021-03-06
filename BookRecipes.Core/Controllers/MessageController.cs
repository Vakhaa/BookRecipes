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
        /// <summary>
        /// Create new message to friend.
        /// </summary>
        /// <returns>Return new message back.</returns>
        public Task<Messages> AddMessageAsync(int authorId, int recipientId, string message)
        {
            return _unitOfWork.Repository.AddAsync(new Messages(authorId,recipientId, message));
        }
    }
}
