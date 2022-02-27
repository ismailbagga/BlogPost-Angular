import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { WidgetModule } from '../widget/widget.module';

const routes: Routes = [
  { path: ':username', component: ProfileComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];

@NgModule({
  declarations: [ProfileComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    MarkdownModule.forChild(),
  ],
})
export class DetailsPageModule {}
