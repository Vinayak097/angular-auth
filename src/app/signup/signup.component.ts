import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule, CommonModule, FontAwesomeModule]
})
export class SignupComponent implements OnInit {
  emailValue: string = '';
  fullname: string = '';
  password: string | null = null;
  orgname: string = '';
  organid: string = '';
  pincode: number | null = null;
  city: string = '';
  designation: string = '';
  mobile: string = '';
  success: boolean = false;
  form: string = 'form1';

  constructor(private userService: UserService, private route: ActivatedRoute) {
    library.add(faArrowLeft);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailValue = params['email'] || '';
      this.mobile= params['phone'] ;
    });
  }

  changeForm(formName: string): void {
    console.log('Switching to form:', formName);
    console.log('Current form data:', {
      emailValue: this.emailValue,
      fullname: this.fullname,
      password: this.password
    });
    this.form = formName;
  }

  onNext(form: NgForm) {
    if (form.valid) {
      this.changeForm('form2');
    }
  }

  signup() {
    const user = {
      email: this.emailValue,
      password: this.password,
      name: this.fullname,
      phone_no: this.mobile
    };
    this.userService.addUser(user);
    this.success = true;
    this.form = 'null';
  }
}
