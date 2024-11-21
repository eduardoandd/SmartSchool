import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  URL = `${environment.MainUrl}/products-mongo/`

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.URL}`)
  }

  post(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.URL}`, product);
  }
  
  put(product:Product): Observable<Product>{
   
    var putUrl= `${this.URL}${product.id}`
    return this.http.put<Product>(putUrl,product)
  }

  delete(product:Product): Observable<Product>{
    var deleteUrl= `${this.URL}${product.id}`
    return this.http.delete<Product>(deleteUrl)
  }

}
