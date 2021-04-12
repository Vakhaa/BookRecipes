using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BookRecipes.WebApi.Extensions.Attributes
{
    [AttributeUsage(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    public class TokenAuthorizationFilterAttribute : Attribute, IAsyncActionFilter
    {
        public Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            switch(context.HttpContext.Response.StatusCode)
            {
                case 400:
                case 403:
                    context.HttpContext.Items.Add("isAuthorizated", false);
                    break;
                default:
                    context.HttpContext.Items.Add("isAuthorizated", true);
                    break;

            }
            return next.Invoke();
        }
    }
}
