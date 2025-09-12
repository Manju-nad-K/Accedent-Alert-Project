

import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.guard';  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   
})
export class AppComponent {
  title = 'AccidentAlertApp';

  constructor(public authService: AuthService, private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
      navbar?.classList.add('sticky');
    } else {
      navbar?.classList.remove('sticky');
    }
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
