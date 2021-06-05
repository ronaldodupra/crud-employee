using BrownieWebApi.Core.Paging;
using Crud.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crud.Server.Repository.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<PaginatedList<Employee>> List(PageOptions _option);
        Task<Employee> View(int _employeeId);
    }
}
