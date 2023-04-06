import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  protected httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  test() {
    return this.httpClient.get("http://localhost:3000/api/v1/home");
  }
}
