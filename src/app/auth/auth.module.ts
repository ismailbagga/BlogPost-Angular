import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserRegisterComponent } from './signup/user-register/user-register.component';
import { CodeVerifyingComponent } from './signup/code-verifying/code-verifying.component';
import { CompletePageComponent } from './signup/user-register/complete-page/complete-page.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UserRegisterComponent,
    CodeVerifyingComponent,
    CompletePageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, WidgetModule],
})
export class AuthModule {}
