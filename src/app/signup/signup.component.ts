import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailValue: string = ''; // Define the inputValue property to bind with ngModel
  fullname:string=''
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the email or phone from query params and set it to inputValue
    this.route.queryParams.subscribe(params => {
      this.emailValue = params['email'] || params['phone'] || '';
    });
  }

  formnext() {
    // Implement the logic for the "NEXT" button click
    console.log('Next button clicked');
  }
}
