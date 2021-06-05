import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  @ViewChild(FormEmployeeComponent)
  form: FormEmployeeComponent;
  constructor(private employeeService:EmployeeService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    if(this.form.employeeForm.valid){
      this.employeeService.insertEmployee(this.form.employeeForm.value).subscribe(data=>{
        console.log(data);
        this.snack.open("Success New Data Inserted",'',{
          panelClass: 'bg-green-700'
        })._dismissAfter(2000)
        this.cancel();
      })
      console.log();
    }
    else{
      this.form.employeeForm.markAllAsTouched();
    }
    
  }
  cancel(){
    this.router.navigate(['']);
  }
}
