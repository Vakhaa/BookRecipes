using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class Messages : BaseEntity
    {
        public int AuthorId { get; set; }
        public Profile Author { get; set; }
        
        public int RecipientId { get; set; }
        public Profile Recipient { get; set; }
        
        public string Message { get; set; }
        
        public bool IsChanged { get; set; }
        
        public string Date { get; set; }
        public string Time { get; set; }
        //*comming soon*
        /*public string PhotosId { get; set; }
        public string VideosId { get; set; }
        public string GIFsId { get; set; }
        public string DocumentsId { get; set; }*/

        public Messages() { }
        public Messages(int authorId, int recipientId, string message)
        {
            if (authorId== 0)
            {
                throw new ArgumentNullException(nameof(authorId), "Must be author Id");
            }
            if (recipientId == 0)
            {
                throw new ArgumentNullException(nameof(recipientId), "Must be recipient Id");
            }

            AuthorId = authorId;
            RecipientId = recipientId;
            Message = message;
            IsChanged = false;
            Date = DateTime.Today.Date.ToShortDateString();
            Time = DateTime.Now.ToShortTimeString();
        }
    }
}
