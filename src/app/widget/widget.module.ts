import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [
    FormFieldComponent,
    FooterComponent,
    NavbarComponent,
    BlogComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [
    FormFieldComponent,
    FooterComponent,
    NavbarComponent,
    BlogComponent,
  ],
})
export class WidgetModule {}
