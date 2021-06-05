
using Crud.Server.Repository;
using Crud.Server.Repository.Interfaces;
using Crud.Server.Services;
using HashidsNet;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace BrownieWebApi.Core.Startup
{
    public static class AppServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<EmployeeService>();

            services.AddTransient<IEmployeeRepository, EmployeeRepository>();

            services.AddControllersWithViews();
            services.AddRazorPages();

            services.AddSingleton<IHashids>(services => new Hashids("secret"));

            return services;
        }
    }
}