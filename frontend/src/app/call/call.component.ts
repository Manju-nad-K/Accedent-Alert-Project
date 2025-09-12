
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { calldbService } from '../service/calldb-service.service';

@Component({
  selector: 'app-calldb',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  phoneNumber: string = '';
  message: string = '';

  constructor(private call: calldbService) { }

  ngOnInit(): void {



    this.call.getNumber().subscribe({
      next: (res: any) => {
        this.phoneNumber = res.phoneNumber;
      },
      error: (err) => {
        console.error('Error loading number:', err);
      }
    });
  }

  saveNumber(): void {
    if (!this.phoneNumber.trim()) {
      this.message = 'Please enter a valid number.';
      return;
    }

    this.call.saveNumber(this.phoneNumber).subscribe({
      next: (res) => {
        console.log('Saved:', res);
        this.message = 'Number saved successfully to DB!';
      },
      error: (err) => {
        console.error('Error saving:', err);
        this.message = 'Error saving number.';
      }
    });
  }
}



