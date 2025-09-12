
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.guard';

export interface User {
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UseProfileInfoService {

  private baseUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserProfile(): Observable<User> {
    const email = this.authService.getEmail(); // ✅ use authService
    const token = this.authService.getToken();

    return this.http.get<User>(`${this.baseUrl}/profile?email=${email}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
