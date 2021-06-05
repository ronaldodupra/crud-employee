using Crud.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.SqlServer;
using Microsoft.Extensions.DependencyInjection;

namespace Brownie.Server.Core.Startup
{
    public static class DatabaseService
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<CrudContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("greenstalk"));
                options.EnableSensitiveDataLogging(true);
            });

            return services;
        }
    }
}