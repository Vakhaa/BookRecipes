using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class Posts : BaseEntity
    {
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        
        public int? AuthorId { get; set; }
        public Profile Author { get; set; }
        
        public string Title { get; set; }
        
        public string Body { get; set; }

        public string Date { get; set; }
        public string Time { get; set; }

        //*comming soon*
        /*public string PhotosId { get; set; }
        public string VideosId { get; set; }
        public string GIFsId { get; set; }
        public string DocumentsId { get; set; }*/

        public Posts() { }
        public Posts(int profileId, string title, string body, int? authorId = null)
        {
            if (profileId == 0)
            {
                throw new ArgumentNullException(nameof(profileId), "Must be profile Id");
            }

            ProfileId = profileId;
            Title = title;
            Body = body;
            if (authorId != 0)
                AuthorId = authorId;
            Date = DateTime.Today.Date.ToShortDateString();
            Time = DateTime.Now.ToShortTimeString();
        }
    }
}
