using System;
using BookRecipes.Infrastructure.Data.Config;
using BookRecipes.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BookRecipes.Infrastructure.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new CategoryConfig());
            modelBuilder.ApplyConfiguration(new RecipeConfig());
            modelBuilder.ApplyConfiguration(new StepsInRecipeConfig());
            modelBuilder.ApplyConfiguration(new IngredientsInRecipeConfig());
            modelBuilder.ApplyConfiguration(new IngredientConfig());

            modelBuilder.ApplyConfiguration(new ProfileConfig());
            modelBuilder.ApplyConfiguration(new AuthDataConfig());
            modelBuilder.ApplyConfiguration(new ProfilePhotosConfig());
            modelBuilder.ApplyConfiguration(new SocialNetworksDataConfig());

            modelBuilder.ApplyConfiguration(new FriendsConfig());
            modelBuilder.ApplyConfiguration(new MyRecipesConfig());
            modelBuilder.ApplyConfiguration(new PostsConfig());
            modelBuilder.ApplyConfiguration(new MessagesConfig());
        }

    }
}
