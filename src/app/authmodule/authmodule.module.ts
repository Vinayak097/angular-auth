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
    FormsModule, // Necessary for ngModel
    AuthmoduleRoutingModule,
     // Include LoginComponent if used within the module
    CardComponent // Include CardComponent if used within the module
  ],
})
export class AuthmoduleModule { }
