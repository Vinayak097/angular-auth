import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AuthmoduleModule } from '../authmodule.module';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  
}
