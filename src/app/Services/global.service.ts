import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  protected httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  signup(data: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/api/v1/auth/signup", data);
  }

}
