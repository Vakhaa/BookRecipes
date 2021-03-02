using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class Friends : BaseEntity
    {
        public int CurrentUserId { get; set; }
        public Profile CurrentUser { get; set; }
        
        public int FriendId { get; set; }
        public Profile Friend { get; set; }

        public Friends() { }
        public Friends(int currentUserId, int friendId)
        {
            if (currentUserId == 0)
            {
                throw new ArgumentNullException(nameof(currentUserId), "Must be current user Id");
            }

            if (friendId == 0)
            {
                throw new ArgumentNullException(nameof(friendId), "Must be friend Id");
            }
            CurrentUserId = currentUserId;
            FriendId = friendId;
        }
    }
}
