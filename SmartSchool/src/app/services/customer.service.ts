import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  URL = `${environment.MainUrl}/customers/`

  getAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.URL}`)
  }

  post(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.URL}`, customer);
  }
  
  

  put(customer:Customer): Observable<Customer>{
   
    var putUrl= `${this.URL}${customer.CustomersId}`
    return this.http.put<Customer>(putUrl,customer)
  }

  delete(customer:Customer): Observable<Customer>{
    var deleteUrl= `${this.URL}${customer.CustomersId}`
    return this.http.delete<Customer>(deleteUrl)
  }
}
