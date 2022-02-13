import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormFieldComponent],
})
export class WidgetModule {}
