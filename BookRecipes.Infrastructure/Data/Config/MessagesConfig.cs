using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class MessagesConfig : IEntityTypeConfiguration<Messages>
    {
        public void Configure(EntityTypeBuilder<Messages> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("Messages");
            //builder.HasKey(x => new { x.Id, x.AuthorId, x.RecipientId}); // x.RecipientId ?
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Author).WithMany(x => x.Messages).HasForeignKey(x => x.AuthorId).OnDelete(DeleteBehavior.NoAction);
           // builder.HasOne(x => x.Recipient).WithMany(x => x.Messages).HasForeignKey(x => x.RecipientId);
        }
    }
}
