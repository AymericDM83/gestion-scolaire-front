import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../model/subject.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url = "http://localhost:8090/api/subjects/";
  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}`);
  }

  findOne(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.url}${id}`);
  }

  add(value: Subject): Observable<Subject>{
    return this.http.post<Subject>(`${this.url}`,value);

  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}
