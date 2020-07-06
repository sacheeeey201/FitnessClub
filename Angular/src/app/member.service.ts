import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = 'http://localhost:8081/api/v1/members';

  constructor(private http: HttpClient) { }

  getMember(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMember(member: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, member);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMembersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateMember(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getValidMember(username: String,password:string): Observable<Member>
     
  {
    return this.http.get<Member>(`${this.baseUrl}/getValidMember?username=${username}&password=${password}`);
  }
}
