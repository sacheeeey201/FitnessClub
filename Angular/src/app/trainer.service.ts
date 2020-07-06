import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = 'http://localhost:8081/api/v1/trainers';

  constructor(private http: HttpClient) { }

  getTrainer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrainer(trainer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, trainer);
  }


  deleteTrainer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTrainersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateTrainer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getValidTrainer(username: String,password:string): Observable<Trainer>
     
  {
    return this.http.get<Trainer>(`${this.baseUrl}/getValidTrainer?username=${username}&password=${password}`);
  }
}