import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Employee } from '../sharedModels/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  getemployeeData(): Observable<Employee[]> {

    return this.http.get<Employee[]>("http://localhost:3333/Employee/EmployeeAPI/getAllEmployees/")
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
  public getemployeedetail(empId): Observable<Employee>{

    return this.http.get<Employee>("http://localhost:3333/Employee/EmployeeAPI/getEmployee/"+empId)
     .pipe(catchError(this.errorHandler));
   }
}
