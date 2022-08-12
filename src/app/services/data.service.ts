import { DataInterface } from '../models/data-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const httpGetRequest = this.http.get(
      'https://apteco-front-end-project.vercel.app/api/data'
    );
    return httpGetRequest;
  }
}
