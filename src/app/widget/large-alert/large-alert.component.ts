import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-large-alert',
  templateUrl: './large-alert.component.html',
  styleUrls: ['./large-alert.component.css'],
})
export class LargeAlertComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() content = { header: '', body: '', footer: '' };
  @Input() color = '';
  @Input() show = false;
  constructor() {}

  ngOnInit(): void {}
  onDismiss() {
    console.log('close from the child ');

    this.close.emit();
  }
}
