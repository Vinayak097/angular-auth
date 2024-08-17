import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string='';
  password:string='';
  mobile:string=""
  
  mockData = {
    emails: ['john@example.com', 'jane@example.com'],
    passwords: ['1234567890', '0987654321']
  };

  constructor(private router: Router) {}

 
  login(){

  }
}
