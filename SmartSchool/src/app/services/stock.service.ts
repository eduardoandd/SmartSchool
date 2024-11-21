import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  URL = `${environment.MainUrl}/stock/`

  getAll():Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.URL}`)
  }

  post(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.URL}`, stock);
  }
  
  put(stock:Stock): Observable<Stock>{
   
    var putUrl= `${this.URL}${stock.id}`
    return this.http.put<Stock>(putUrl,stock)
  }

  delete(stock:Stock): Observable<Stock>{
    var deleteUrl= `${this.URL}${stock.id}`
    return this.http.delete<Stock>(deleteUrl)
  }
}
