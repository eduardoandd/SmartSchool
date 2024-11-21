import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  URL = `${environment.MainUrl}/employees/`

  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URL}`)
  }

  post(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.URL}`, employee);
  }
  
  put(employee:Employee): Observable<Employee>{
   
    var putUrl= `${this.URL}${employee.id}`
    return this.http.put<Employee>(putUrl,employee)
  }

  delete(employee:Employee): Observable<Employee>{
    var deleteUrl= `${this.URL}${employee.id}`
    return this.http.delete<Employee>(deleteUrl)
  }



}
