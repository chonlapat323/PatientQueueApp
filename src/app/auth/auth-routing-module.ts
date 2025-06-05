import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';

const routes: Routes = [
  { path: 'sign-up', component: SignUp },
  { path: 'sign-in', component: SignIn },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
