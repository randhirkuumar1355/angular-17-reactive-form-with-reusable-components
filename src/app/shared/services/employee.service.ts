import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, throwError } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private baseService: BaseService) { }

  public getEmployees() {
    return this.baseService.get(env.apiUrl + '/employees').pipe(catchError(this.errorHandler));
  } 

  public postEmployee(emp: Emp) {
    return this.baseService.post(env.apiUrl + '/employees', emp).pipe(catchError(this.errorHandler));
  }

  public getEmployeeById(id: number) {
    return this.baseService.get(env.apiUrl + '/employees/' + id).pipe(catchError(this.errorHandler));
  }

  public updateEmployee(id: number, emp: Emp) {
    return this.baseService.put(env.apiUrl + '/employees/' + id, emp).pipe(catchError(this.errorHandler));
  }

  public deleteEmployee(id: number){
    return this.baseService.delete(env.apiUrl + '/employees/', id).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
