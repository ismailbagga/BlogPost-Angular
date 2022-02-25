import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CategorieRadioButtonComponent } from './categorie-radio-button/categorie-radio-button.component';
import { CloseModalComponent } from './CloseModel/model.component';
import { LargeAlertComponent } from './large-alert/large-alert.component';
import { BlogDataIconComponent } from './blog-data-icon/blog-data-icon.component';
@NgModule({
  declarations: [
    FormFieldComponent,
    FooterComponent,
    NavbarComponent,
    BlogComponent,
    CategorieRadioButtonComponent,
    CloseModalComponent,
    LargeAlertComponent,
    BlogDataIconComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [
    FormFieldComponent,
    FooterComponent,
    NavbarComponent,
    BlogComponent,
    CategorieRadioButtonComponent,
    CloseModalComponent,
    LargeAlertComponent,
    BlogDataIconComponent,
  ],
})
export class WidgetModule {}
