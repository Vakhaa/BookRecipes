using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class LoginController
    {
        private IUnitOfWork _unitOfWork;
        
        public LoginController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Auth user.
        /// </summary>
        /// <returns>IsAuth.</returns>
        public async Task<bool> GetAuthAsync(string login, string password)
        {
            var result = await _unitOfWork.Repository.GetWithIncludeEntityAsync<AuthData>
                (c => c.Mail.ToLower() == login.ToLower() && c.Password == password);
            return result !=null ? true: false;
        }
    }
}
