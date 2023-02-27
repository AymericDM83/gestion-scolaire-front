import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EventInfo} from "../../model/eventInfo.model";

@Injectable({
  providedIn: 'root',
})
export class AddEventInfoService {
  url = `http://localhost:8090/api/EventInfos/`;
  byEstablishmentSuffix = 'findbyestablishment/';

  constructor(private http: HttpClient) {}
  findAll(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(`${this.url}`);
  }
  add(value: EventInfo): Observable<EventInfo> {
    return this.http.post<EventInfo>(`${this.url}`, value);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
  findOne(id: number): Observable<EventInfo> {
    return this.http.get<EventInfo>(`${this.url}${id}`);
  }
  findByEstablishment(id: number): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(
      `${this.url}${this.byEstablishmentSuffix}${id}`
    );
  }
}
