import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Keep this for Forms support

import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { CardComponent } from './card/card.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule, 
    AuthmoduleRoutingModule,
   
    CardComponent 
  ],
})
export class AuthmoduleModule { }
