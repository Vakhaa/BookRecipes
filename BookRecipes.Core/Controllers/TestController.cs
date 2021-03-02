using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Entities;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel.Interfaces;

namespace BookRecipes.Core.Controllers
{
    public class TestController
    {
        private IUnitOfWork _unitOfWork;
        /// <summary>
        /// Активная категория.
        /// </summary>
        public Profile CurrentCategory { get; set; }
        public TestController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Загрузка списка категорий в приложение.
        /// </summary>
        /// <returns>Список категорий.</returns>
        public Task<IEnumerable<Profile>> GetProfileAsync()
        {
            return _unitOfWork.Repository.GetWithIncludeListAsync<Profile>(c => c.AuthData, c => c.Photos, c => c.SocialNetworks, c=> c.Friends);
        }
    }
}
