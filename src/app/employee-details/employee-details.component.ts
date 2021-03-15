import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeDetailService } from './employee-detail.service';
import { EmployeeListService } from '../emplyoee-list/employee-list.service';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Employee } from '../sharedModels/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private actrouter:ActivatedRoute, private empldtl:EmployeeDetailService
    ,private emplistservice: EmployeeListService,private fb:FormBuilder) { }

  employeeForm:FormGroup;
  employeeid:number;
  empldetail:Employee;
  errmessage:string;
  successMessage:string;


  ngOnInit() { 
    
    this.errmessage = null; 
    this.actrouter.paramMap.subscribe((params:ParamMap)=>
    {
      let id= parseInt(params.get('id'));
      this.employeeid=id;
  });
  

  this.empldtl.getemployeedetail(this.employeeid).subscribe(data=>
    {this.empldetail= data;
      this.employeeForm = this.fb.group({
        empId:[{value:this.empldetail.empId,disabled:true}],
        name:[this.empldetail.name],
        department:[this.empldetail.department],
        address:[this.empldetail.address],
        reportsTo:[this.empldetail.reportsTo],
        telephone:[this.empldetail.telephone],
        position:[this.empldetail.position],
        salary:[this.empldetail.salary]
      });}, 
      
      error=>this.errmessage= error);


  
  }
update(employeeForm){
  this.errmessage = null;
  this.successMessage = null;
  this.empldtl.updateEmployee(this.employeeid,employeeForm.value).subscribe(success => this.successMessage = success,
                                                              error =>this.errmessage = error);
}

delete(){
  this.errmessage = null;
  this.successMessage = null;
  this.empldtl.deleteEmployee(this.employeeid)
          .subscribe(success => {this.successMessage = success;},
                      error => this.errmessage = error
                    );
}
}
