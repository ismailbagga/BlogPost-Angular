import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'error/unauthorize', component: UnAuthorizeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [NotFoundComponent, UnAuthorizeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [NotFoundComponent],
})
export class ErorrHandinlingModule {}
