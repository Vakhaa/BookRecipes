using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{
    public class ProfilePhotos : BaseEntity
    {

        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        public string SmallPhoto { get; set; }
        public string LargePhoto { get; set; }

        public ProfilePhotos() { }
        public ProfilePhotos(int profileId,string small, string large)
        {
            #region  Test conditions
            if (profileId == 0)
            {
                throw new ArgumentNullException(nameof(profileId), "Profile id can't be null");
            }
            if (string.IsNullOrWhiteSpace(small))
            {
                throw new ArgumentNullException(nameof(small), "Url small photo can't be null");
            }
            if (string.IsNullOrWhiteSpace(large))
            {
                throw new ArgumentNullException(nameof(large), "Url small photo can't be null");
            }
            #endregion

            ProfileId = profileId;
            SmallPhoto = small;
            LargePhoto = large;
        }
    }
}
