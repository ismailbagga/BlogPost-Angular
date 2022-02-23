import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [HomeComponent, ExploreComponent],
  imports: [CommonModule, PagesRoutingModule, WidgetModule],
})
export class PagesModule {}
