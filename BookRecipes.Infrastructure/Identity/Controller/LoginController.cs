using System.Threading;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using BookRecipes.Core.Entities.SocialNetwork;

namespace BookRecipes.Infrastructure.Identity.Controller
{
    public class LoginController
    {

        private UserManager<AppUser> _userManager { get; }

        private readonly SignInManager<AppUser> _signInManager;

        public LoginController(UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<AppUser> AuthAsync(AuthData request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Mail);
            if (user == null)
            {
                throw new  ArgumentNullException("user don't auth");
            }
            
            var result = await _signInManager.PasswordSignInAsync(user, request.Password,false,false); //username pass user.RememberMe

            if (result.Succeeded)
            {
                return new AppUser
                {
                    DisplayName = user.DisplayName,
                    Email = user.DisplayName,
                    UserName = user.DisplayName,
                };
            }
            throw new ArgumentNullException("user don't auth");
        }
        
        public async Task LogoutAsync()
        {
                await _signInManager.SignOutAsync();
        }

        public async Task<IdentityResult> RegisterAsync(string login, string password)
        {
            var user = new AppUser
            {
                DisplayName = login,
                UserName = login,
                Email = login
            };

            return await _userManager.CreateAsync(user, password);
        }
    }
}
