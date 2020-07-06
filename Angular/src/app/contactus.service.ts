import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private baseUrl = 'http://localhost:8081/api/v1/contactUs';

  constructor(private http: HttpClient) { }

  getCU(id: number): Observable<any> {
    
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCU(contactus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contactus);
  }

  deleteCU(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCUList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  
}
