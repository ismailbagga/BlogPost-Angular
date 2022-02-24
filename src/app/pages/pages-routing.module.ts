import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/explore', component: ExploreComponent },
  { path: 'blogs/create', component: CreateBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
