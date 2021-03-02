using System;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities.SocialNetwork
{ 
    public class SocialNetworksData : BaseEntity
    {
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        public string GitHub { get; set; }
        public string Telegram { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Youtube { get; set; }
        public string OtherSocialNetwork { get; set; }

        public SocialNetworksData() { }
        public SocialNetworksData(int profileId, string github, string telegram, string facebook, string instagram, string youtube, string other)
        {
            if (profileId == 0)
            {
                throw new ArgumentNullException(nameof(profileId), "Must be user Id");
            }
            ProfileId = profileId;
            
            GitHub = string.IsNullOrWhiteSpace(github) ? null: github;
            Telegram = string.IsNullOrWhiteSpace(telegram) ? null : telegram;
            Facebook = string.IsNullOrWhiteSpace(facebook) ? null : facebook ;
            Instagram = string.IsNullOrWhiteSpace(instagram) ? null: instagram;
            Youtube = string.IsNullOrWhiteSpace(youtube) ? null : youtube;
            OtherSocialNetwork = string.IsNullOrWhiteSpace(other) ? null : other;
        }
    }
}
