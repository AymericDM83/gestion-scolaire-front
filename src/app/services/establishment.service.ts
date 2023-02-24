import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from 'src/model/establishment.model';
import { EstablishmentComponent } from '../Establishment-components/establishment/establishment.component';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  url = `http://localhost:8090/api/establishments/`;

  private establishments: EstablishmentComponent[] = [];

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.url);
  }

  public getOne(id: number): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.url}${id}`);
  }

  public add(value: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(`${this.url}`, value);
  }

  public deleteOne(id: number): Observable<Establishment> {
    return this.http.delete<Establishment>(`${this.url}${id}`);
  }
}
