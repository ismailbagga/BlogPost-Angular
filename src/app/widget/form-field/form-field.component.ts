import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  @Input() valid: boolean = false;
  @Input() invalid: boolean = false;
  @Input() label = '';
  @Input() type = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  isFocus: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  unFocus() {
    this.isFocus = false;
    console.log('unfocus', this.isFocus);
  }
  focus() {
    this.isFocus = true;
    console.log('focus', this.isFocus);
  }
}
