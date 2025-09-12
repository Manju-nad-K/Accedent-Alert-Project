



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ⬅️ import this
import { calldbService } from '../service/calldb-service.service';
import { SosService } from '../Services/sos.service';

@Component({
  selector: 'app-test-home',
  standalone: true,
  imports: [CommonModule],   // ⬅️ keep CommonModule for ngClass
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phoneNumber: string = '';
  message: string = '';
  latitude: number | undefined;
  longitude: number | undefined;
  accidentHappened: boolean = false;   // ⬅️ used to pause wheels + tilt car

  constructor(
    private callDbService: calldbService,
    private sosService: SosService
  ) { }

  ngOnInit(): void {
    this.callDbService.getNumber().subscribe({
      next: (res: any) => {
        this.phoneNumber = res?.phoneNumber || '';
      },
      error: (err) => {
        this.message = 'Failed to fetch phone number from DB.';
      }
    });
  }

  triggerAccident() {
    // ✅ accident triggered → car tilts + wheels stop
    this.accidentHappened = true;
    this.makeCall();
  }

  makeCall() {
    if (!this.phoneNumber) {
      alert('No emergency number stored in DB!');
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      this.sosService.triggerCall(this.phoneNumber, this.latitude, this.longitude).subscribe({
        next: (res) => {
          this.message = '🚨Accident Detected! Emergency Call Triggered';
        },
        error: (err) => {
          this.message = 'Error: ' + (err.error?.message || err.error || err.statusText);
        }
      });
    }, () => {
      this.sosService.triggerCall(this.phoneNumber, null as any, null as any).subscribe({
        next: (res) => {
          this.message = '🚨 Accident Detected! Emergency Call Triggered (no location)';
        },
        error: (err) => {
          this.message = 'Error: ' + (err.error?.message || err.error || err.statusText);
        }
      });
    });
  }
}
