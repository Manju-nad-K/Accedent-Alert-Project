import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SosService {
  private apiUrl = 'http://localhost:8081/api/sos/call';

  constructor(private http: HttpClient) { }

  triggerCall(phoneNumber: string, latitude?: number, longitude?: number): Observable<any> {
    const formattedNumber = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;


    return this.http.post(this.apiUrl, { phoneNumber: formattedNumber, latitude, longitude }, { responseType: 'text' });
  }

}
