import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextimagePage } from './textimage.page';

const routes: Routes = [
  {
    path: '',
    component: TextimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextimagePageRoutingModule {}
