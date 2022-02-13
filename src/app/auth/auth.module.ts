import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserRegisterComponent } from './signup/user-register/user-register.component';
import { CodeVerifyingComponent } from './signup/code-verifying/code-verifying.component';
import { CompletePageComponent } from './signup/complete-page/complete-page.component';
import { WidgetModule } from '../widget/widget.module';
import { RegisterFormComponent } from './signup/user-register/register-form/register-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UserRegisterComponent,
    CodeVerifyingComponent,
    CompletePageComponent,
    RegisterFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, WidgetModule],
})
export class AuthModule {}
