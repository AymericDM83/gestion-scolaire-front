import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddEventInCalanderComponent} from "../add-event-in-calander/add-event-in-calander.component";
import {Observable} from "rxjs";
import {EventIfo} from "../../model/eventInfo.model";


@Injectable({
  providedIn: 'root'
})
export class AddEventService {
  url = `http://localhost:8090/api/events/`;
  byEstablishmentSuffix = 'findbyestablishment/';

  constructor(private http: HttpClient) { }
  findAll(): Observable<EventIfo[]> {
    return this.http.get<EventIfo[]>(`${this.url}`);
  }
  add(value: EventIfo): Observable<EventIfo> {
    return this.http.post<EventIfo>(`${this.url}`, value);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
  findOne(id: number): Observable<EventIfo> {
    return this.http.get<EventIfo>(`${this.url}${id}`);
  }
  findByEstablishment(id: number): Observable<EventIfo[]> {
    return this.http.get<EventIfo[]>(
      `${this.url}${this.byEstablishmentSuffix}${id}`
    );
  }



}
