import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { CardComponent } from './card/card.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CardComponent,
    AuthmoduleRoutingModule,
    FormsModule
  ]
})
export class AuthmoduleModule { 
  
}
