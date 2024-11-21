import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  URL = `${environment.MainUrl}/orders-mongo/`

  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(this.URL)
  }

  post(order: Order): Observable<Order>{
    return this.http.post<Order>(`${this.URL}`, order);

  }

  put(order:Order): Observable<Order>{
   
    var putUrl= `${this.URL}${order.id}`
    return this.http.put<Order>(putUrl,order)
  }

  delete(order:Order): Observable<Order>{
    var deleteUrl= `${this.URL}${order.id}`
    return this.http.delete<Order>(deleteUrl)
  }
}
