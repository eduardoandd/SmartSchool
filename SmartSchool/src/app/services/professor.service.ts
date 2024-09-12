import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../models/professor';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  URL= `${environment.MainUrl}/api/professor`

  getAll(): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.URL}`)
  }

  put(professor:Professor): Observable<Professor>{
    return this.http.put<Professor>(`${this.URL}/${professor.id}`, professor)
  }

  delete(professor:Professor): Observable<Professor>{
    return this.http.delete<Professor>(`${this.URL}/${professor.id}`)
  }

  post(professor:Professor): Observable<Professor>{
    return this.http.post<Professor>(`${this.URL}`, professor)
  }

}
