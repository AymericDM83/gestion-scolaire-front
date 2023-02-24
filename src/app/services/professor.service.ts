import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../../model/professor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  url = `http://localhost:8090/api/professors/`;

  constructor(private http: HttpClient) {}
  findAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}`);
  }

  findOne(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.url}${id}`);
  }

  add(value: Professor): Observable<Professor> {
    return this.http.post<Professor>(`${this.url}`, value);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}
