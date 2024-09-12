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

  post(aluno:Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(`${this.URL}`,aluno)
  }

  put(aluno:Aluno): Observable<Aluno>{
    return this.http.put<Aluno>(`${this.URL}/${aluno.id}`,aluno)
  }

  delete(aluno:Aluno): Observable<Aluno>{
    return this.http.delete<Aluno>(`${this.URL}/${aluno.id}`);
  }
}
