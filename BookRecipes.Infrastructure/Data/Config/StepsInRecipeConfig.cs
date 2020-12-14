using System;
using BookRecipes.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class StepsInRecipeConfig : IEntityTypeConfiguration<StepsInRecipe>
    {
        public void Configure(EntityTypeBuilder<StepsInRecipe> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("StepsInRecipe");
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Recipe).WithMany(x => x.StepsHowCooking).HasForeignKey(x => x.RecipeId);
        }
    }
}
