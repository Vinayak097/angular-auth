import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true
})
export class LoginComponent {
  inputValue: string = ''; // Property to hold the input value

  // Mock data for email and phone numbers
  mockData = {
    emails: ['john@example.com', 'jane@example.com'],
    phones: ['1234567890', '0987654321']
  };

  constructor(private router: Router) {}

  EmailorPhone() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(this.inputValue)) {
      // Check if email exists in mock data
      if (this.mockData.emails.includes(this.inputValue)) {
        // Navigate to login page with email
        this.router.navigate(['/login'], { queryParams: { email: this.inputValue } });
      } else {
        // Navigate to signup page with email
        this.router.navigate(['/signup'], { queryParams: { email: this.inputValue } });
      }
    } else if (phoneRegex.test(this.inputValue)) {
      // Check if phone number exists in mock data
      if (this.mockData.phones.includes(this.inputValue)) {
        // Navigate to login page with phone number
        this.router.navigate(['/login'], { queryParams: { phone: this.inputValue } });
      } else {
        // Navigate to signup page with phone number
        this.router.navigate(['/signup'], { queryParams: { phone: this.inputValue } });
      }
    } else {
      alert('Please enter a valid email or phone number');
    }
  }
}
