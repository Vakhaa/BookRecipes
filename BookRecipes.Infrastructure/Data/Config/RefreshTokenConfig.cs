using System;
using BookRecipes.Infrastructure.Token;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class RefreshTokenConfig : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("RefreshToken");
            builder.Ignore(x => x.Id);
            builder.HasKey(x=>x.Token);
            /*builder.HasOne(x => x.User).WithOne(x => x.RefreshToken).HasForeignKey<RefreshToken>(x => x.UserId);*/
        }
    }
}
