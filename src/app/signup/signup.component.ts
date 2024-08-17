import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailValue: string = ''; 
  fullname:string=''
  password:string=''
  orgname:string=''
  organid:string='';
  pincode:number|null=null;
  city:string=''
  designation:string=''
  success:boolean=false
  form : string='form1';


  changeForm(formName: string): void {
    this.form = formName;
  }
  
  constructor(private route: ActivatedRoute) {
    library.add(faArrowLeft);
  }
  
  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.emailValue = params['email'] || params['phone'] || '';
    });
  }

  formnext() {
    
    console.log('Next button clicked');
    
  }
  signup(){
    this.success=true
    this.form='null'

  }
}
