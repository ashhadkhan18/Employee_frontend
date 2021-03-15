import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeAddService } from './employee-add.service';
import { error } from 'protractor';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private fb:FormBuilder,private employeeAddService:EmployeeAddService) { }

  employeeForm:FormGroup;
  errorMessage:string;
  successMessage:string;

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name:[],
      gender:[],
      department:[],
      dob:[],
      address:[],
      reportsTo:[],
      telephone:[],
      position:[],
      salary:[]
    });
  }

  add(employeeForm){
    this.successMessage = null;
    this.errorMessage = null;
    this.employeeAddService.addEmployee(employeeForm.value)
                  .subscribe(success => this.successMessage = success,
                              error => this.errorMessage = error);
  }

}
