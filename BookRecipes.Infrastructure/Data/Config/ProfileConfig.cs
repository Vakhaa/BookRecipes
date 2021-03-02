using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class ProfileConfig : IEntityTypeConfiguration<Profile>
    {
        public void Configure(EntityTypeBuilder<Profile> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("Profiles");
            builder.HasKey(x => x.Id);
            builder.HasOne(x=>x.AuthData).WithOne(x=>x.Profile).HasForeignKey<AuthData>(x => x.ProfileId);
            builder.HasOne(x => x.Photos).WithOne(x => x.Profile).HasForeignKey<ProfilePhotos>(x=>x.ProfileId);
            builder.HasOne(x => x.SocialNetworks).WithOne(x => x.Profile).HasForeignKey<SocialNetworksData>(x=>x.ProfileId);
            
            //builder.HasMany(x => x.Friends).WithOne(x => x.CurrentUser).HasForeignKey(x => x.CurrentUserId);
            builder.HasMany(x => x.MyRecipes).WithOne(x => x.Profile).HasForeignKey(x => x.ProfileId);
            //builder.HasMany(x => x.Posts).WithOne(x => x.Profile).HasForeignKey(x => x.ProfileId);

            builder.HasMany(x => x.Messages).WithOne(x => x.Author).HasForeignKey(x => x.AuthorId);
        }
    }
}
