using System;
using BookRecipes.Core.Entities;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.Infrastructure.Data.Config;
using Microsoft.EntityFrameworkCore;

namespace BookRecipes.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        /*public DbSet<Category> Categories { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientsInRecipe> IngredientsInRecipes { get; set; }
        public DbSet<StepsInRecipe> StepsInRecipes { get; set; }
        
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<AuthData> AuthDatas { get; set; }
        public DbSet<SocialNetworksData> SocialNetworksDatas{ get; set; }
        public DbSet<ProfilePhotos> ProfilePhotos{ get; set; }
        public DbSet<MyRecipes> MyRecipes{ get; set; }
        public DbSet<Friends> Friends{ get; set; }
        public DbSet<Messages> Messages{ get; set; }
        public DbSet<Posts> Posts{ get; set; }*/

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
