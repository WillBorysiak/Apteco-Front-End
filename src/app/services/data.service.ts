import { DataInterface } from '../models/data-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<DataInterface> {
    return this.http.get<DataInterface>('assets/cubeResults.json');
  }
}
