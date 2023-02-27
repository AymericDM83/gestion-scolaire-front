import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEventInCalanderComponent } from '../Calendar-components/add-event-in-calendar/add-event-in-calendar.component';
import { Observable } from 'rxjs';
import { Establishment } from '../../model/establishment.model';
import { EventInfo } from 'src/model/eventInfo.model';

@Injectable({
  providedIn: 'root',
})
export class AddEventService {
  url = `http://localhost:8090/api/events/`;
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
