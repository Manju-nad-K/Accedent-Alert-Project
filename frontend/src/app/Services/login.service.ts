import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LoginResponse {
  jwt: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8081/auth';
  constructor(private http: HttpClient) { }

  // Login
  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }




  // Signup
  signup(name: string, email: string, phone: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { name, email, phone, password });
  }
}
