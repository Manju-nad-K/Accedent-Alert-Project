
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 // (login/signup)
  isLoginMode: boolean = true;


  name: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) { }

  // Switch between login and signup mode
  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
  }

  // Submit form (login or signup)
  submitForm() {
    if (this.isLoginMode) {
      //  Login flow
      this.loginService.authenticate(this.email, this.password).subscribe({
        next: (res) => {
          this.authService.login(res.jwt, res.email);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
          alert('Invalid email or password');
        }
      });
    } else {
      //  Signup flow
      this.loginService.signup(this.name, this.email, this.phone, this.password).subscribe({
        next: (res) => {
          alert(res.message);
          // switch back to login mode after signup
          this.isLoginMode = true;
        },
        error: (err) => {
          console.error(err);
          alert(err.error.message || 'Signup failed!');
        }
      });
    }
  }
}
