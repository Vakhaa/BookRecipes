using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

using BookRecipes.Core.Controllers;
using BookRecipes.Infrastructure.Data;
using BookRecipes.Infrastructure.Token;
using BookRecipes.SharedKernel.Interfaces;
using BookRecipes.Infrastructure.Identity.Controller;

namespace BookRecipes.Infrastructure.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, string connectionString)
        {
            services.TryAddSingleton<ISystemClock, SystemClock>();
            services.AddDbContext<AppDbContext>(opts => opts.UseSqlServer(connectionString));
            services.AddScoped<IRepository, EFRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            //Token
            services.AddScoped<IJwtGenerator, JwtGenerator>();

            services.AddScoped<CategoryController>();
            services.AddScoped<IngredientController>();
            services.AddScoped<RecipeController>();

            services.AddScoped<CurrentProfileController>();
            services.AddScoped<FriendController>();
            services.AddScoped<PostController>();
            services.AddScoped<MessageController>();
            services.AddScoped<MyRecipesController>();
            
            services.AddScoped<LoginController>();

            services.AddScoped<TestController>();

            return services;
        }
    }
}
