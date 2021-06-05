import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @ViewChild(FormEmployeeComponent)
  form: FormEmployeeComponent;
  employeeId:number;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router,private snack:MatSnackBar) { 
    this.employeeId=+this.route.snapshot.params.id
  }
  
  ngOnInit(): void {
    this.viewEmployee();
   
  }
  updateEmployee(){
    if(this.form.employeeForm.valid){
      this.employeeService.updateEmployee(this.form.employeeForm.value,this.employeeId).subscribe(data=>{
        console.log(data);
        this.snack.open("Success Data Updated",'',{
          panelClass: 'bg-green-700'
        })._dismissAfter(2000)
        this.cancel();
        
      })
    }else{
      this.form.employeeForm.markAllAsTouched();
    }
    
  }
  viewEmployee(){
    this.employeeService.viewEmployee(this.employeeId).subscribe(data=>{
      this.form.employeeForm.patchValue({
        lastName:data.lastName,
        firstName:data.firstName,
        middleName:data.middleName,
      })
    })
  }
  cancel(){
    this.router.navigate(['']);
  }

}
