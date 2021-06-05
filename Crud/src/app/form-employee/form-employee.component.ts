import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  employeeForm:FormGroup=this.fb.group({
    firstName:[null,Validators.required],
    lastName:[null,Validators.required],
    middleName:[null],
  })
  ngOnInit(): void {
  }
 
}
