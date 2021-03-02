using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class ProfilePhotosConfig : IEntityTypeConfiguration<ProfilePhotos>
    {
        public void Configure(EntityTypeBuilder<ProfilePhotos> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("ProfilePhotos");
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Profile).WithOne(x => x.Photos).HasForeignKey<Profile>(x => x.ProfilePhotosId);
        }
    }
}
