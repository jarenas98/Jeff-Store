import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormUserComponent } from './components/form-user/form-user.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
