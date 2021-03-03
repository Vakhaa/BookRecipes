﻿using BookRecipes.Core.Controllers;
using BookRecipes.Infrastructure.Data;
using BookRecipes.SharedKernel.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BookRecipes.Infrastructure.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AppDbContext>(opts => opts.UseSqlServer(connectionString));
            services.AddScoped<IRepository, EFRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
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
