import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';
import { employeeinterface } from '../sharedModels/employeeInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplyoee-list',
  templateUrl: './emplyoee-list.component.html',
  styleUrls: ['./emplyoee-list.component.css']
})
export class EmplyoeeListComponent implements OnInit {

  constructor(private emplistservice: EmployeeListService, private router:Router) { }

  ngOnInit() {
  }

  isvisible: boolean = true;
  employees: employeeinterface[];
  errormessage: string='';

  getemployeeList(){

    this.isvisible= false;
    this.emplistservice.getemployeeData()
    .subscribe(data=>this.employees=data.data,
                error=>this.errormessage=error);
                console.log(this.errormessage);
  }
  getemployeeDetail(emplid){
    this.router.navigate(['/employee-detail',emplid]);
  }
}
