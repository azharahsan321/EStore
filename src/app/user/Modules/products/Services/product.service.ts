import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  protected httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  fetchAllProducts(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/api/v1/products/get/all");
  }
}
