using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.Infrastructure.Token;
using BookRecipes.SharedKernel.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BookRecipes.Infrastructure.Identity.Controller
{
    public class LoginController
    {

        private readonly IUnitOfWork _unitOfWork;
        private UserManager<AppUser> _userManager { get; }

        private readonly SignInManager<AppUser> _signInManager;

        public LoginController(UserManager<AppUser> userManager,
            IUnitOfWork unitOfWork,
            SignInManager<AppUser> signInManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<AppUser> AuthAsync(AuthData request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Mail);
            if (user == null)
            {
                throw new ArgumentNullException("user don't auth");
            }

            var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, false); //username pass user.RememberMe

            if (result.Succeeded)
            {
                return user;
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

        public async Task<AppUser> RefreshTokenAsync(string jti, string refreshToken)
        {
            #region storedRefreshToken
            var storedRefreshToken = await _unitOfWork.Repository.GetWithIncludeEntityAsync<RefreshToken>(x => x.Token == refreshToken);

            if (storedRefreshToken == null)
            {
                throw new Exception("This refresh token does not exist!");
            }

            if (DateTime.UtcNow > storedRefreshToken.ExpiryDate)
            {
                throw new Exception("This refresh token has expired!");
            }

            if (storedRefreshToken.Invalidated)
            {
                throw new Exception("This refresh token has been invalidated");
            }

            if (storedRefreshToken.Used)
            {
                throw new Exception("This refresh token has been used");
            }

            if (storedRefreshToken.JwtJti != jti)
            {
                throw new Exception("This refresh token does not match this JWT");
            }

            storedRefreshToken.Used = true;

            _unitOfWork.Repository.Update(storedRefreshToken);
            await _unitOfWork.SaveAsync();
            #endregion

            var user = await _userManager.FindByIdAsync(storedRefreshToken.UserId);

            return user;
        }


    }
}
