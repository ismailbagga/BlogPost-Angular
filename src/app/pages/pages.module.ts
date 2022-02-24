import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { WidgetModule } from '../widget/widget.module';

import { from } from 'rxjs';

@NgModule({
  declarations: [HomeComponent, ExploreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PagesRoutingModule,
    WidgetModule,
  ],
})
export class PagesModule {}
