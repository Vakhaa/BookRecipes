using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class SocialNetworksDataConfig : IEntityTypeConfiguration<SocialNetworksData>
    {
        public void Configure(EntityTypeBuilder<SocialNetworksData> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("SocialNetworksData");
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Profile).WithOne(x => x.SocialNetworks).HasForeignKey<Profile>(x => x.SocialNetworksId);
        }
    }
}
