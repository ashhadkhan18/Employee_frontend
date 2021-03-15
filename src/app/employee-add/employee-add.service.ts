import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../sharedModels/Employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAddService {

  constructor(private http:HttpClient) { }

  public addEmployee(employee:Employee):Observable<string>{
    return this.http.post<string>("http://localhost:3333/Employee/EmployeeAPI/addEmployee",employee,{responseType: 'text' as 'json'})
        .pipe(catchError(this.errorHandler));
  }

  public errorHandler(err:HttpErrorResponse){
    let errmessage:string = null;
    if(err instanceof ErrorEvent){
      errmessage= `Error: ${err.error.message}`;
    }
    else{
      errmessage= `Error: ${err.status}\nMessage:${err.message}`;
    }
    return throwError(errmessage);
  }
}
