import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {
  
  email:string='';
  password:string='';
  mobile:string='';
  paramemail:boolean=false;
  success:boolean=false
  error:string=''
  name:string=''
  

  constructor(private userservice:UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name=params['name'];
      if(params['email']){
        this.email=params['email']
        this.paramemail=true
      }else if(params['phone']){
        this.mobile=params['phone'];
        this.paramemail=false
      }
    });
  }


 
  login(){
    this.error=''
    const input=this.paramemail? this.email:this.mobile;
    const user=this.userservice.getUserByEmailOrMobile(input)
    if(user){
      if(this.password==user.password){
        this.success=true
      }else{
        this.error="Incorrect password. Please try again";
      setTimeout(() => {
        this.error=''        
      }, 3000);
      }
    }else{
      this.error="Incorrect credentials. Please try again"
      setTimeout(() => {
        this.error=''        
      }, 3000);
    }
    
  }
}
