import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classgroup} from "../../model/classgroup.model";

@Injectable({
  providedIn: 'root'
})
export class ClassgroupService {
  url = "http://localhost:8090/api"
  urlSuffix = '/classgroups'

  constructor(private http: HttpClient) { }

  private classgroups: Classgroup[] = []

  findAll(): Observable<Classgroup[]> {
    return this.http.get<Classgroup[]>(`${this.url}${this.urlSuffix}`);
  }
  add(classgroup: Classgroup): Observable<Classgroup> {
    return this.http.post<Classgroup>(`${this.url}${this.urlSuffix}`, classgroup);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.urlSuffix}${id}`);
  }
}
