import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldWithIconComponent } from './form-field-with-icon/form-field-with-icon.component';

@NgModule({
  declarations: [FormFieldComponent, FormFieldWithIconComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormFieldComponent, FormFieldWithIconComponent],
})
export class WidgetModule {}
