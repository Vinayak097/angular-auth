import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  email:string='';
  phone:string='';
  // Mock data for email and phone numbers
  mockData = {
    emails: ['john@example.com', 'jane@example.com'],
    phones: ['1234567890', '0987654321']
  };

  constructor(private router: Router) {}

  EmailorPhone() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(this.email)) {
      console.log(this.email)
      
      if (this.mockData.emails.includes(this.email)) {
        
        this.router.navigate(['/login'], { queryParams: { email: this.email } });
      } else {
        
        this.router.navigate(['/signup'], { queryParams: { email: this.email } });
      }
    } else if (phoneRegex.test(this.phone)) {
      
      if (this.mockData.phones.includes(this.phone)) {
        
        this.router.navigate(['/login'], { queryParams: { phone: this.phone } });
      } else {
        
        this.router.navigate(['/signup'], { queryParams: { phone: this.phone } });
      }
    } else {
      alert('Please enter a valid email or phone number');
    }
  }
  
}
