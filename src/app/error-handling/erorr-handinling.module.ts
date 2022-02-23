import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', component: NotFoundComponent },
  { path: 'unauthorize', component: UnAuthorizeComponent },
];

@NgModule({
  declarations: [NotFoundComponent, UnAuthorizeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ErorrHandinlingModule {}
