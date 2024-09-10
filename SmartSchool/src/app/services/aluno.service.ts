import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  URL= `${environment.MainUrl}/api/aluno`

  getAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.URL}`);
  }

  getById(id:number): Observable<Aluno>{
    return this.http.get<Aluno>(`${this.URL}/${id}`);
  }

  post(alunio:Aluno){
    return this.http.post(`${this.URL}`,Aluno)
  }

  put(id:number, aluno:Aluno): Observable<Aluno>{
    return this.http.put<Aluno>(`${this.URL}/${id}`,aluno)
  }

  delete(id:number): Observable<Aluno>{
    return this.http.delete<Aluno>(`${this.URL}/${id}`);
  }
}
