using System.Threading.Tasks;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class CurrentProfileController
    {
        private IUnitOfWork _unitOfWork;
        
        public CurrentProfileController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Take profile by Id.
        /// </summary>
        /// <returns>Current profile.</returns>
        public Task<Profile> GetProfileByIdAsync(int id)
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<Profile>
                (c=>c.Id==id, c => c.Photos, c => c.SocialNetworks, c=> c.Friends); // Maybe friends delete ?
        }

        public Task<Profile> GetProfileByNameAsync(string name) // change on login 
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<Profile>
                (c => c.Name.ToLower() == name, c => c.Photos, c => c.SocialNetworks, c => c.Friends);
        }
    }
}
