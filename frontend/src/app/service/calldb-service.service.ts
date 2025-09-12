import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class calldbService {
  private apiUrl = 'http://localhost:8081/api/phone';

  constructor(private http: HttpClient) { }

  saveNumber(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, { phoneNumber });
  }

  getNumber(): Observable<any> {
    return this.http.get(`${this.apiUrl}/last`);
  }

}
