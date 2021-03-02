using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class AuthDataConfig : IEntityTypeConfiguration<AuthData>
    {
        public void Configure(EntityTypeBuilder<AuthData> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("AuthData");
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Profile).WithOne(x => x.AuthData).HasForeignKey<Profile>(x => x.AuthId);
        }
    }
}
