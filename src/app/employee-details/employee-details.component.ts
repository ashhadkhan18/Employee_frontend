import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { employeesingleresponse } from '../sharedModels/employeesingleresponse';
import { EmployeeDetailService } from './employee-detail.service';
import { employeeinterface } from '../sharedModels/employeeInterface';
import { EmployeeListService } from '../emplyoee-list/employee-list.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private actrouter:ActivatedRoute, private empldtl:EmployeeDetailService
    ,private emplistservice: EmployeeListService, private cookies: CookieService) { }

  ngOnInit() { 
   
    
    this.actrouter.paramMap.subscribe((params:ParamMap)=>
    {
      let id= parseInt(params.get('id'));
      this.employeeid=id;
  });
  }
  cookiesvalue:string;
employeeid:number=0;
empldetail:any;
errmessage:string='';

clickevent(){
  this.empldtl.getemployeedetail().subscribe(data=>this.empldetail= data,
                                                              error=>this.errmessage= error);
      console.log(this.empldetail);
}
}
