import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/details-page/blog-detail/blog-detail.component';

@Component({
  selector: 'app-blog-data-icon',
  templateUrl: './blog-data-icon.component.html',
  styleUrls: ['./blog-data-icon.component.css'],
})
export class BlogDataIconComponent implements OnInit {
  @Input() iconObj!: Icon;
  label = '';
  icon = '';
  text = '';
  linkState = { state: false, link: '' };

  constructor() {}

  ngOnInit(): void {
    console.log(this.iconObj);

    this.label = this.iconObj?.label;
    this.icon = this.iconObj?.icon;
    this.text = this.iconObj?.text;
    this.linkState = this.iconObj?.linkState;
  }
}
