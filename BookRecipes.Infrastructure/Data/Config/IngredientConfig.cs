using System;
using BookRecipes.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class IngredientConfig : IEntityTypeConfiguration<Ingredient>
    {
        public void Configure(EntityTypeBuilder<Ingredient> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("Ingredients");
            builder.HasKey(x => x.Id);
            builder.HasMany(x => x.IngredientsInRecipe).WithOne(x => x.Ingredient).HasForeignKey(x => x.IngredientId);
        }
    }
}
