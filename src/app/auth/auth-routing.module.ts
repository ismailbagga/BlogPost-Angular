import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CodeVerifyingComponent } from './signup/code-verifying/code-verifying.component';
import { CompletePageComponent } from './signup/user-register/complete-page/complete-page.component';
import { SignupComponent } from './signup/signup.component';
import { UserRegisterComponent } from './signup/user-register/user-register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: SignupComponent,
    children: [
      { path: '', component: UserRegisterComponent },
      { path: 'verify', component: CodeVerifyingComponent },
      { path: 'complete', component: CompletePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
