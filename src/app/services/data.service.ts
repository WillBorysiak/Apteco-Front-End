import { DataInterface } from '../models/data-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpPostBody } from './httpPostBody';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<DataInterface> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer + ${process.env.NG_APP_ACCESS_TOKEN!}`,
    });

    const httpPostRequest = this.http.post<DataInterface>(
      'https://www.tealgreenholidays.co.uk/OrbitAPI/CloudDemo/Cubes/CloudDemo/CalculateSync',
      httpPostBody,
      { headers: httpHeaders }
    );

    return httpPostRequest;
  }
}
