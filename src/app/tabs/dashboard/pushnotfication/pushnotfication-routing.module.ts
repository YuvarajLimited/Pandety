import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushnotficationPage } from './pushnotfication.page';

const routes: Routes = [
  {
    path: '',
    component: PushnotficationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushnotficationPageRoutingModule {}
