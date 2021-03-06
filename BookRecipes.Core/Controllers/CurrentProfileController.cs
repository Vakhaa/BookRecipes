using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class CurrentProfileController
    {
        private IUnitOfWork _unitOfWork;
        /// <summary>
        /// Активная категория.
        /// </summary>
        public Profile CurrentCategory { get; set; }
        public CurrentProfileController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Загрузка списка категорий в приложение.
        /// </summary>
        /// <returns>Список категорий.</returns>
        public Task<Profile> GetProfileAsync(int id)
        {
            return _unitOfWork.Repository.GetWithIncludeEntityAsync<Profile>
                (c=>c.Id==id, c => c.Photos, c => c.SocialNetworks, c=> c.Friends); // Maybe friends delete ?
        }
    }
}
