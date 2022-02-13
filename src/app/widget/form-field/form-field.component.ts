import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  @Input() valid: boolean = false;
  @Input() unvalid: boolean = false;
  @Input() label = '';
  @Input() type = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() fieldName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
