import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { WidgetModule } from '../widget/widget.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [HomeComponent, ExploreComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    PagesRoutingModule,
    WidgetModule,
  ],
})
export class PagesModule {}
