import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  valid: boolean = false;
  invalid: boolean = false;
  stateChanged = false;
  @Input() label = '';
  @Input() type = '';
  @Input() placeholder = '';
  @Input() errors: { error: string; text: string }[] = [];
  @Input() control!: FormControl;
  @Input() validateState = true;
  constructor() {}

  ngOnInit(): void {}
  isValid() {
    let control = this.control;
    return control.valid && control.dirty;
  }
  isInValid() {
    let control = this.control;
    return control.invalid && control.dirty;
  }

  fetchError(error: string): boolean {
    return this.control.hasError(error);
  }
}
