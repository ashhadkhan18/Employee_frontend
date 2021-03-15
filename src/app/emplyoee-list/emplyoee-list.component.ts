import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';
import { Router } from '@angular/router';
import { Employee } from '../sharedModels/Employee';

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
  employees: Employee[];
  employee:Employee;
  errormessage: string;

  getemployeeList(){
    this.errormessage = null;
    this.isvisible= false;
    this.emplistservice.getemployeeData()
    .subscribe(data=>this.employees=data,
                error=>this.errormessage=error);
                console.log(this.errormessage);
  }
  getemployeeDetail(emplid){
    this.emplistservice.getemployeedetail(emplid).subscribe(
      data=>this.employee=data,
      error=>this.errormessage=error);

    this.router.navigate(['/employee-detail',emplid]);
  }
}
