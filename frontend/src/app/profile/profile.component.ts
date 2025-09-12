import { Component, OnInit } from '@angular/core';
import { UseProfileInfoService, User } from '../Services/use-profile-info.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private userService: UseProfileInfoService) { }

  ngOnInit() {
    // Get the logged-in user's email (stored at login)
    const email = localStorage.getItem('email');
    if (email) {
      this.userService.getUserProfile().subscribe(
        (user: User) => {
          this.name = user.name;
          this.email = user.email;
          this.phone = user.phone;
        },
        error => console.error('Error fetching profile', error)
      );
    }
  }
}
