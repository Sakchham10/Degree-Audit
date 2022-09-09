import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestsService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3100';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}${uri}`);
  }

  post(uri: string, payload: Object) {
    console.log(uri);
    console.log(payload);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.ROOT_URL}${uri}`, payload, httpOptions);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}${uri}`);
  }
}
