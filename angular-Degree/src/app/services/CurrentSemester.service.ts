import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentSemesterService {
  constructor(private webRequest: WebRequestsService) {}

  getCurrent(id: string) {
    //Send request to fetch the current semester
  }

  getCatalog() {
    return this.webRequest.get('/catalog');
  }
}
