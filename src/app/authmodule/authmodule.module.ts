import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    AuthmoduleRoutingModule
  ]
})
export class AuthmoduleModule { }
