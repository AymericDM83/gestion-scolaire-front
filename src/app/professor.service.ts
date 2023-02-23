import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Professor} from "../model/professor.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  url = "http://localhost:8090/";

  constructor(private readonly http: HttpClient) { }
  findAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}/all`);
  }

  findOne(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.url}/${id}`);
  }

  add(value: Professor): Observable<Professor>{
    return this.http.post<Professor>(`${this.url}/add`,value);

  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
