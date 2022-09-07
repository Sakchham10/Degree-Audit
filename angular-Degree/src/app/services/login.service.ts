import { Injectable } from '@angular/core';
import { json } from 'express';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private webRequest: WebRequestsService) {}

  login(username: string | null, password: string | null) {
    return this.webRequest.post(
      '/login',
      JSON.stringify({ Username: username, Password: password })
    );
  }
}
