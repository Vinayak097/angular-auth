import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AuthmoduleModule } from '../authmodule.module';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SignupComponent } from '../../signup/signup.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule,RouterOutlet,LoginComponent,FormsModule,SignupComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {
  
  
 
  constructor(private router: Router, private route: ActivatedRoute) {}

  
  
  
  
}
