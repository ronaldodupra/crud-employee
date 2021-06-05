
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Crud.Server.Models
{
    public class CrudContext : IdentityDbContext
    {

        public virtual DbSet<Employee> Employee { get; set; }
        public CrudContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CrudContext).Assembly);
        }
    }
}