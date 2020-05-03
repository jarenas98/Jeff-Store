import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { FormUserComponent } from './components/form-user/form-user.component';



const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'register',
  component: FormUserComponent
}];


@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
