using System.Threading.Tasks;

namespace BookRecipes.SharedKernel.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository Repository{ get; }
        Task SaveAsync();
    }
}
