import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AuthmoduleModule } from '../authmodule.module';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from '../../signup/signup.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FormsModule,SignupComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  
}
