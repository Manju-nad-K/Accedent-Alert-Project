// // auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwt';

  // 👇 BehaviorSubject so Angular auto-updates when login/logout happens
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.loggedIn.asObservable(); // for async pipe in templates

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(jwt: string, email: string) {
    localStorage.setItem(this.tokenKey, jwt);
    localStorage.setItem("email", email);
    this.loggedIn.next(true); // 🔥 notify navbar
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem("email");
    this.loggedIn.next(false); // 🔥 notify navbar
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }


  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getEmail(): string | null {
    return localStorage.getItem('email');
  }
}
