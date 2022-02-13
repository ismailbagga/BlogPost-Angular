import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field-with-icon',
  templateUrl: './form-field-with-icon.component.html',
  styleUrls: ['./form-field-with-icon.component.css'],
})
export class FormFieldWithIconComponent implements OnInit {
  @Input() type = '';
  @Input() label = '';
  @Input('control') group!: FormGroup;
  @Input() controllerName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
