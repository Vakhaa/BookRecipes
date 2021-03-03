using System;
using System.Linq;
using BookRecipes.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookRecipes.Infrastructure.Data.Config
{
    public class RecipeConfig :IEntityTypeConfiguration<Recipe>
    {
        public void Configure(EntityTypeBuilder<Recipe> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            builder.ToTable("Recipes");
            builder.HasKey(x => x.Id);
            builder.HasMany(x=>x.IngredientsInRecipe).WithOne(x=>x.Recipe).HasForeignKey(x => x.RecipeId);
            builder.HasMany(x => x.StepsHowCooking).WithOne(x => x.Recipe).HasForeignKey(x => x.RecipeId);
            builder.HasMany(x => x.MyRecipes).WithOne(x => x.Recipe).HasForeignKey(x => x.RecipeId);
        }
    }
}
