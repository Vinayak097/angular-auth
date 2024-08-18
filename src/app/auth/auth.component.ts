import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  email:string='';
  phone:string='';
  error:string='';
  
  // Mock data for email and phone numbers
  

  constructor(private userService:UserService ,private router: Router) {}
  // onCheckUser(){
  //   const user=this.userService.getUserByEmailOrMobile(this.email);
  //   if(user){
  //     this.router.navigate(['/login'], { queryParams: { email: this.email } });
  //   }else{
  //     const user=this.userService.getUserByEmailOrMobile(this.email);
  //     if(user){
  //       this.router.navigate(['/login'], { queryParams: { phone: this.phone } });
  //     }
  //   }
  // }

  EmailorPhone() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    this.error=''

    if (emailRegex.test(this.email)) {
      console.log(this.email)
      const user=this.userService.getUserByEmailOrMobile(this.email);
      if (user) {
        
        this.router.navigate(['/login'], { queryParams: { email: this.email ,name:user.name } });
      } else {
        
        this.router.navigate(['/signup'], { queryParams: { email: this.email } });
      }
    } else if (phoneRegex.test(this.phone)) {
      console.log(this.phone)
      const user=this.userService.getUserByEmailOrMobile(this.phone);
      if (user) {
        
        this.router.navigate(['/login'], { queryParams: { phone: this.phone ,name:user.name} });
      } else {
        
        this.router.navigate(['/signup'], { queryParams: { phone: this.phone } });
      }
    } else {
      this.error='Please enter a valid email or phone number'
      
      setTimeout(() => {
        this.error=''        
      }, 3000);
    }
  }
  
}
