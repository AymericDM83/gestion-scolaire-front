import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEventInCalanderComponent } from '../Calendar-components/add-event-in-calander/add-event-in-calander.component';
import { Observable } from 'rxjs';
import { Establishment } from '../../model/establishment.model';

@Injectable({
  providedIn: 'root',
})
export class AddEventService {
  url = `http://localhost:8090/api/events/`;
  byEstablishmentSuffix = 'findbyestablishment/';

  constructor(private http: HttpClient) {}
  findAll(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.url}`);
  }
  add(value: Event): Observable<Event> {
    return this.http.post<Event>(`${this.url}`, value);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
  findOne(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.url}${id}`);
  }
  findByEstablishment(id: number): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${this.url}${this.byEstablishmentSuffix}${id}`
    );
  }
}
