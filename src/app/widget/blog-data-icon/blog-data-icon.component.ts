import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/details-page/blog-detail/blog-detail.component';

@Component({
  selector: 'app-blog-data-icon',
  templateUrl: './blog-data-icon.component.html',
  styleUrls: ['./blog-data-icon.component.css'],
})
export class BlogDataIconComponent implements OnInit {
  @Input() iconObj!: Icon;
  @Input() value: string | number | boolean = '';
  @Input() link = '';
  label = '';
  icon = '';

  constructor() {}

  ngOnInit(): void {
    this.label = this.iconObj?.label;
    this.icon = this.iconObj?.icon;
  }
}
