// user.service.ts
import { Injectable } from '@angular/core';
import { User } from './signup/signup.component';
@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  private users :User[]= [
    { name: 'John Doe', email: 'johndoe@example.com', password: 'password123', mobile_no: '1234567890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', password: 'securepass456', mobile_no: '0987654321' },
    
  ];

  constructor() {}

  getUserByEmailOrMobile(input : string ) {
    console.log("compareing")
    console.log(input)
    return this.users.find(user => user.email === input || user.mobile_no === input);
  }

  addUser(user: User) {
    this.users.push(user);
  }
  
}
