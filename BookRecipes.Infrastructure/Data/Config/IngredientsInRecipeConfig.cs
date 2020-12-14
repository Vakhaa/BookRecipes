using System;
using BookRecipes.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class IngredientsInRecipeConfig : IEntityTypeConfiguration<IngredientsInRecipe>
    {
        public void Configure(EntityTypeBuilder<IngredientsInRecipe> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("IngredientsInRecipe");
            builder.Ignore("Id");
            builder.HasKey(x => new { x.RecipeId,x.IngredientId });
            builder.HasOne(x => x.Recipe).WithMany(x => x.IngredientsInRecipe).HasForeignKey(x => x.RecipeId);
            builder.HasOne(x => x.Ingredient).WithMany(x => x.IngredientsInRecipe).HasForeignKey(x => x.IngredientId);
        }
    }
}
