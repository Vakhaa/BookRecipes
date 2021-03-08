using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace BookRecipes.WebApi.WebHub
{
    public class PostsHub :  Hub
    {
        public async Task Send(string message)
        {
            await Clients.All.SendAsync("Send", message);  
        }
        
        public async Task SendConnectionId(string connectionId)
        {
            await Clients.All.SendAsync("sendConnectionId", "A connection with ID '" + connectionId + "' has just connected");
        }
    }
}
