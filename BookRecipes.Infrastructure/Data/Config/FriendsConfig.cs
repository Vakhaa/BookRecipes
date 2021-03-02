using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class FriendsConfig : IEntityTypeConfiguration<Friends>
    {
        public void Configure(EntityTypeBuilder<Friends> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("Friends");
            builder.Ignore("Id");
            builder.HasKey(x => new { x.CurrentUserId, x.FriendId});
            builder.HasOne(x => x.CurrentUser).WithMany(x => x.Friends).HasForeignKey(x => x.CurrentUserId).OnDelete(DeleteBehavior.NoAction);
            //builder.HasOne(x => x.Friend).WithMany(x => x.Friends).HasForeignKey(x => x.FriendId);
        }
    }
}
