import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classgroup } from '../../model/classgroup.model';
import { Professor } from '../../model/professor.model';

@Injectable({
  providedIn: 'root',
})
export class ClassgroupService {
  url = `http://localhost:8090/api/classgroups/`;
  byEstablishmentSuffix = `findbyestablishment/`;

  constructor(private http: HttpClient) {}


  private classgroups: Classgroup[] = [];


  findAll(): Observable<Classgroup[]> {
    return this.http.get<Classgroup[]>(`${this.url}`);
  }

  findByEstablishment(id: number): Observable<Classgroup[]> {
    return this.http.get<Classgroup[]>(
      `${this.url}${this.byEstablishmentSuffix}${id}`
    );
  }

  // Problème ici lorsqu'on veut ajouter un prof avec, probablement dans la formation du Json
  add(value: Classgroup): Observable<Classgroup> {
    return this.http.post<Classgroup>(`${this.url}`, value);
    
  findOne(id: number): Observable<Classgroup> {
    return this.http.get<Classgroup>(`${this.url}${id}`);
  }

  add(value: Classgroup): Observable<Classgroup>{
    return this.http.post<Classgroup>(`${this.url}`,value);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }


}
