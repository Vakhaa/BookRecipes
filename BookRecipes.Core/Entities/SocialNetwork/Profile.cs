using System;
using System.Collections.Generic;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class Profile : BaseEntity
    {
        #region Properties
        /// <summary>
        /// User name.
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// User surname.
        /// </summary>
        public string Surname { get; set; }
        /// <summary>
        /// User description.
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// User status.
        /// </summary>
        public string Status { get; set; }
        /// <summary>
        /// Is user online ?
        /// </summary>
        public bool isOnline { get; set; }

          #region map prop
        /// <summary>
        /// Auth data.
        /// </summary>
        public int AuthId { get; set; }
        public AuthData AuthData { get; set; }
        /// <summary>
        /// Social network data.
        /// </summary>
        public int SocialNetworksId { get; set; }
        public SocialNetworksData SocialNetworks { get; set; }
        /// <summary>
        /// User profile photos.
        /// </summary>
        public int? ProfilePhotosId { get; set; }
        public ProfilePhotos Photos { get; set; }
        
        /// <summary>
        /// User friends.
        /// </summary>
        public IEnumerable<Friends> Friends { get; set; } 
        /// <summary>
        /// Current users recipes.
        /// </summary>
        public IEnumerable<MyRecipes> MyRecipes { get; set; }
        /// <summary>
        /// Current users posts.
        /// </summary>
        public IEnumerable<Posts> Posts { get; set; }
        /// <summary>
        /// Current users messages.
        /// </summary>
        public IEnumerable<Messages> Messages { get; set; }
            #endregion
        #endregion
        public Profile() { }
        public Profile(string name, string surname, string description, string status, int authId, int socialNetworksId, int? profilePhotosId)
        {
            #region  Test conditions
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentNullException(nameof(name), "User name can't be null");
            }
            if (string.IsNullOrWhiteSpace(surname))
            {
                throw new ArgumentNullException(nameof(surname), "User surname can't be null");
            }
            if (string.IsNullOrWhiteSpace(description))
            {
                throw new ArgumentNullException(nameof(description), "Description can't be null");
            }
            if (authId == 0)
            {
                throw new ArgumentNullException(nameof(authId), "Must be auth Id");
            }
            if (socialNetworksId == 0)
            {
                throw new ArgumentNullException(nameof(socialNetworksId), "Must be social networks Id");
            }
            #endregion

            Name = name;
            Surname = surname;
            Description = description;
            if (string.IsNullOrWhiteSpace(status))
            {
                Status = "Change your status ;)";
            }
            else
            {
                Status = status;
            }
            isOnline = false;
            AuthId = authId;
            SocialNetworksId = socialNetworksId;
            if(profilePhotosId != 0)
            ProfilePhotosId = profilePhotosId;
        }
    }
}
