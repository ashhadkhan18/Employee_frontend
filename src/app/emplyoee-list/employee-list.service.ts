import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { employeeinterface } from '../sharedModels/employeeInterface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { employeeresponse } from '../sharedModels/employeeresponse';
import { employeesingleresponse } from '../sharedModels/employeesingleresponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  getemployeeData(): Observable<employeeresponse> {

    return this.http.get<employeeresponse>("http://dummy.restapiexample.com/api/v1/employees")
      .pipe(catchError(this.errorHandler));

  }
  private errorHandler(err: HttpErrorResponse) {
    let errormessage = '';
    if (err.error instanceof ErrorEvent) {
      errormessage = `Error: ${err.error.message}`;
    }
    else{
      errormessage=  `Error Code: ${err.status}\nMessage:${err.message}`;
    }
    return throwError(errormessage);
  }
  public getemployeedetail(): Observable<employeesingleresponse>{

    return this.http.get<employeesingleresponse>("http://dummy.restapiexample.com/api/v1/employee/2")
     .pipe(catchError(this.errorHandler));
   }
}
