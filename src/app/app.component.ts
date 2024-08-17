import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './authmodule/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'angfirst';
  isDsabled: boolean = true;
  isActive: boolean = false;  
}
