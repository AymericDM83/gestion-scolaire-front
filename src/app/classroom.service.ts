import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classroom} from "../model/classroom.model";


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  url = `http://localhost:8090/api/classrooms/`
  constructor(private http: HttpClient) { }

  findAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${this.url}`);
  }

  findOne(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${this.url}${id}`);
  }

  add(value: Classroom): Observable<Classroom>{
    return this.http.post<Classroom>(`${this.url}`,value);

  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}
