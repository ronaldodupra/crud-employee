using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrownieWebApi.Core.Paging;
using Crud.Server.Models;
using Crud.Server.Repository.Interfaces;

namespace Crud.Server.Repository
{
    public class EmployeeRepository : Repository, IEmployeeRepository
    {
        private readonly CrudContext _crudContext;
        public EmployeeRepository(CrudContext context) : base(context)
        {
            _crudContext = context;
        }
        public async Task<PaginatedList<Employee>> List(PageOptions options)
        {
            var employee = _crudContext.Employee.ToList();
            var count = employee.Count();
            return new PaginatedList<Employee>(employee, count, options.PageIndex, options.PageSize);
        }
        public async Task<Employee> View(int employeeId)
        {
            var employee = _crudContext.Employee.Find(employeeId);
            return employee;
        }

    }
}
