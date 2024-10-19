import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  currentLight: 'red' | 'yellow' | 'green' = 'red';
  interval: any;

  ngOnInit() {
    this.startTrafficLight();
  }

  startTrafficLight() {
    this.interval = setInterval(() => {
      switch (this.currentLight) {
        case 'red':
          this.currentLight = 'green';
          break;
        case 'green':
          this.currentLight = 'yellow';
          break;
        case 'yellow':
          this.currentLight = 'red';
          break;
      }
    }, 1000); // Change light every second
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}