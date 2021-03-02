using System;
using BookRecipes.Core.Entities.SocialNetwork;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class MyRecipesConfig : IEntityTypeConfiguration<MyRecipes>
    {
        public void Configure(EntityTypeBuilder<MyRecipes> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("MyRecipes");
            builder.Ignore("Id");
            builder.HasKey(x => new { x.ProfileId, x.RecipeId });
            
            builder.HasOne(x => x.Profile).WithMany(x => x.MyRecipes).HasForeignKey(x => x.ProfileId);
            builder.HasOne(x => x.Recipe).WithMany(x => x.MyRecipes).HasForeignKey(x => x.RecipeId);
        }
    }
}
