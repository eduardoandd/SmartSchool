import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private apiUrl = 'http://127.0.0.1:8000/sales/'; // URL da sua API

  constructor(private http: HttpClient) { }

  // Método para buscar os dados
  getSales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
