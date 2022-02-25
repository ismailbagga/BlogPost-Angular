import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorie-radio-button',
  templateUrl: './categorie-radio-button.component.html',
  styleUrls: ['./categorie-radio-button.component.css'],
})
export class CategorieRadioButtonComponent implements OnInit {
  @Input() categorie = '';
  @Input() name = '';
  @Input() color = '';
  @Input() control = new FormControl();
  constructor() {}

  ngOnInit(): void {}
  onChange(event: Event) {
    this.control.setValue(this.categorie);
  }
}
