using Crud.Server.Dto;
using Crud.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crud.Server.Services
{
    public class EmployeeService
    {
        private readonly CrudContext _crudContext;
        public EmployeeService(CrudContext crudContext)
        {
            _crudContext = crudContext;
        }
        public async Task<Employee> Update(CreateEmployeeDto model,int employeeId)
        {
            var employee = _crudContext.Employee.Find(employeeId);
            employee.LastName = model.LastName;
            employee.FirstName = model.FirstName;
            employee.MiddleName = model.MiddleName;

            _crudContext.SaveChanges();
            return employee;
        }
        public async Task<Employee> Insert(CreateEmployeeDto model)
        {
            var employee = new Employee
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                MiddleName = model.MiddleName,
            };
            _crudContext.Employee.Add(employee);
            _crudContext.SaveChanges();
            return employee;
        }
        public async Task<Employee> Delete(int employeeId)
        {
            var employee = _crudContext.Employee.Find(employeeId);
            _crudContext.Employee.Remove(employee);
            _crudContext.SaveChanges();
            return employee;
        }
    }
}
