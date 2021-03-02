using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{ 
    public class AuthData : BaseEntity
    {
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        public string Mail { get; set; }
        public string Password { get; set; }

        public AuthData() { }
        public AuthData( int profileId, string mail, string password)
        {
            if (profileId == 0)
            {
                throw new ArgumentNullException(nameof(profileId), "Profile Id can't be 0");
            }   
            if (string.IsNullOrWhiteSpace(mail))
            {
                throw new ArgumentNullException(nameof(mail), "Mail can't be null");
            }   
            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ArgumentNullException(nameof(password), "Password can't be null");
            }
            ProfileId = profileId;
            Mail = mail;
            Password = password;
        }
    }
}
