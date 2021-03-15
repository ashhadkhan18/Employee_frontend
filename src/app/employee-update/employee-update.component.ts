import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeDetailService } from '../employee-details/employee-detail.service';
import { Employee } from '../sharedModels/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,public employeeDetailService:EmployeeDetailService, private router:Router) { }
  empForm:FormGroup;
  errorMessage:string;
  employee:Employee;

  ngOnInit() {
    this.empForm = this.fb.group({
      empId:[]
    });

  }

  public getEmployeeDetails(){
    this.errorMessage = null;
    this.employeeDetailService.getemployeedetail(this.empForm.get('empId').value)
                          .subscribe(data =>{ this.employee = data;
                            this.router.navigate(['/employee-detail',this.empForm.get('empId').value]);},
                            error => this.errorMessage = error);
  }

}
