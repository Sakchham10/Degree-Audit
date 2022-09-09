import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private webService: WebRequestsService) {}

  register(
    first: string | null,
    username: string | null,
    password: string | null,
    last: string | null
  ) {
    return this.webService.post(
      '/register',
      JSON.stringify({ first, username, password })
    );
  }
}
