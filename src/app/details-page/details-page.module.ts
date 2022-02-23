import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '/:username', component: ProfileComponent },
  { path: 'blogs/:id', component: BlogDetailComponent },
];

@NgModule({
  declarations: [ProfileComponent, BlogDetailComponent],
  imports: [CommonModule],
})
export class DetailsPageModule {}
