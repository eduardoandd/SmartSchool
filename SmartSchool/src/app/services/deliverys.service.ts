import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Delivery } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliverysService {

  constructor(private http: HttpClient) { }

  URL = `${environment.MainUrl}/delivery/`

  getAll():Observable<Delivery[]>{
    return this.http.get<Delivery[]>(`${this.URL}`)
  }

  post(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.URL}`, delivery);
  }
  
  put(delivery:Delivery): Observable<Delivery>{
   
    var putUrl= `${this.URL}${delivery.id}`
    return this.http.put<Delivery>(putUrl,delivery)
  }

  delete(delivery:Delivery): Observable<Delivery>{
    var deleteUrl= `${this.URL}${delivery.id}`
    return this.http.delete<Delivery>(deleteUrl)
  }
}
