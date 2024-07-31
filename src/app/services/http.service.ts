import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }

  get<T> (url: string, params: { [key: string]: string }): Observable<T> {
    return this.http.get<T>(url, { params: params });
  }

  post<T> (url: string, payload: any): Observable<T> {
    return this.http.post<T>(url, payload);
  }
}
