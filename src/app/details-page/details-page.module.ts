import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':username', component: ProfileComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];

@NgModule({
  declarations: [ProfileComponent, BlogDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DetailsPageModule {}
