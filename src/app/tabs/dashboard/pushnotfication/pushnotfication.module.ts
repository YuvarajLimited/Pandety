import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushnotficationPageRoutingModule } from './pushnotfication-routing.module';

import { PushnotficationPage } from './pushnotfication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushnotficationPageRoutingModule
  ],
  declarations: [PushnotficationPage]
})
export class PushnotficationPageModule {}
