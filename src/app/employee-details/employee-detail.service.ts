import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Employee } from '../sharedModels/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient) { }

  public getemployeedetail(empId): Observable<Employee>{
   return this.http.get<Employee>("http://localhost:3333/Employee/EmployeeAPI/getEmployee/"+empId)
    .pipe(catchError(this.errorHandler));
  }
 
  public updateEmployee(empId,employee:Employee):Observable<string>{
    employee.empId = empId;
    return this.http.patch<string>("http://localhost:3333/Employee/EmployeeAPI/updateEmployee/"+empId,employee,{responseType: 'text' as 'json'})
      .pipe(catchError(this.errorHandler));
  }

  public deleteEmployee(empId):Observable<string>{
    return this.http.delete<string>("http://localhost:3333/Employee/EmployeeAPI/deleteEmployee/"+empId,{responseType: 'text' as 'json'})
    .pipe(catchError(this.errorHandler));
  }

 public errorHandler(err:HttpErrorResponse){
    let errmessage:string='';
    if(err instanceof ErrorEvent){
      errmessage= `Error: ${err.error.message}`;
    }
    else{
      errmessage= `Error: ${err.status}\nMessage:${err.message}`;
    }
    return throwError(errmessage);
  }
}
