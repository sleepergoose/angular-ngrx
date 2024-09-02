import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  httpGet = <T>(url: string, params: HttpParams) => {
    return this.http.get<T>(url, {
      headers: this.headers,
      params,
    })
  };
}
