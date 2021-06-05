import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource, PageEvent, Sort } from '@angular/material';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { PageOptions } from '../core/shared/PageOption';
import { EmployeeModel } from '../model/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private route:Router,private snack:MatSnackBar) { }
  totalPages: number;

  totalCount: number;

  pageIndex = 0;

  pageSize = 10;

  term: string;

  sort: Sort = {
    active: "",
    direction: "",
  };

  displayedColumns=[
    'Id','LastName','FirstName','MiddleName','Option'
  ]
  dataSources: MatTableDataSource<EmployeeModel[]>;
  ngOnInit(): void {
    this.getEmployee();
  }
  public getEmployee() {
    const options = new PageOptions(
      this.pageIndex,
      this.pageSize,
      this.sort.active,
      this.sort.direction
    );
    this.employeeService.getEmployee(options).subscribe(data=>{
      this.dataSources= new MatTableDataSource<EmployeeModel[]>(data.items);
      this.totalPages = data.totalPages;
      this.totalCount = data.totalCount;
    })
  }
  sortdata(sort: Sort) {
    this.sort = sort;
    this.getEmployee();
  }
  onPageChanged(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getEmployee();
  }
  deleteEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.snack.open("Employee Succesfully Deleted!",'',{
        panelClass: 'bg-green-700'
      })._dismissAfter(2000)
      this.getEmployee();
    })
  }
  editEmployee(id){
    this.route.navigate(['edit',id])
  }
}
