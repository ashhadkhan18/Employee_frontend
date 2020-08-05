import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { employeesingleresponse } from '../sharedModels/employeesingleresponse';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/internal/operators';
import { employeeresponse } from '../sharedModels/employeeresponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient, private cookieservice:CookieService) { }

  url:string="http://dummy.restapiexample.com/api/v1/employee/1";
  cookiesvalue :string;



  public getemployeedetail(): Observable<employeesingleresponse>{
    this.http.options("http://dummy.restapiexample.com/api/v1/employee/2");
    console.log( this.http.options("http://dummy.restapiexample.com/api/v1/employee/2"));
    this.cookiesvalue= this.cookieservice.get('PHPSESSID');
    this.cookieservice.set('PHPSESSID',"f0b9ab292459dd1ab362faafe72d365c",2,"dummy.restapiexample.com");
    // this.cookieservice.set('PHPSESSID',"f0b9ab292459dd1ab362faafe72d365c");
    // this.cookieservice.set('Path',"/");
    // this.cookieservice.set('Domain',"dummy.restapiexample.com");
    
   return this.http.get<employeesingleresponse>("http://dummy.restapiexample.com/api/v1/employee/2")
    .pipe(catchError(this.errorHandler));
  }
//return this.http.get<employeeresponse>("http://dummy.restapiexample.com/api/v1/employees")
//.pipe(catchError(this.errorHandler));
 
 private errorHandler(err:HttpErrorResponse){
    let errmessage:string='';
    if(err instanceof ErrorEvent){
      errmessage= `Error: ${err.error.message}`;
    }
    else{
      errmessage= `Error: ${err.status}\nMessage:${err.message}`
    }
    window.alert(errmessage);
    return throwError(errmessage);
  }
}
