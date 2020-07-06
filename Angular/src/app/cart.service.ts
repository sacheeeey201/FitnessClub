import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8081/api/v1/atc';

  constructor(private http: HttpClient) { }

  getCart(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addToCart(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  addToCartQ(id: number,quantity: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  emptyCart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  deleteCart(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/d/${id}`, { responseType: 'text' });
  }

  getCartList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateCart(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
