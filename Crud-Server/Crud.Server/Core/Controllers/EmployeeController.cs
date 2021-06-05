using BrownieWebApi.Core.Paging;
using Crud.Server.Dto;
using Crud.Server.Models;
using Crud.Server.Repository.Interfaces;
using Crud.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crud.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase
    {
        private readonly CrudContext _crudContext;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly EmployeeService _employeeService;
        public EmployeeController(CrudContext crudContext, IEmployeeRepository employeeRepository, EmployeeService employeeService)
        {
            _crudContext = crudContext;
            _employeeRepository = employeeRepository;
            _employeeService = employeeService;
        }
        
        [HttpGet]
        public async Task<PaginatedList<Employee>> GetEmployees([FromQuery] PageOptions options, string term = "") {
            return await _employeeRepository.List(options);
        }
        [HttpPost]
        public async Task<Employee> InsertEmployee([FromBody] CreateEmployeeDto model)
        {
            return await _employeeService.Insert(model);
        }
        [HttpPut]
        [Route("{Id}")]
        public async Task<Employee> UpdateEmployee(int Id,[FromBody] CreateEmployeeDto model)
        {
            return await _employeeService.Update(model,Id);
        }
        [HttpDelete]
        [Route("{Id}")]
        public async Task<Employee> DeleteEmployee(int Id)
        {
            return await _employeeService.Delete(Id);
        }
        [HttpGet]
        [Route("{Id}")]
        public async Task<Employee> ViewEmployee(int Id)
        {
            return await _employeeRepository.View(Id);
        }
    }
}
