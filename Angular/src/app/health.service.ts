import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private baseUrl = 'http://localhost:8081/api/v1/hresults';

  constructor(private http: HttpClient) { }

  getHealth(id: number): Observable<any> {                  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }

  getMHealth(id: number): Observable<any> {                  
    return this.http.get(`${this.baseUrl}/m/${id}`);  
  }
  
  createHealth(health: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, health);
  }

  getHealthList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateHealth(id: number, value: any): Observable<Object> { 
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
