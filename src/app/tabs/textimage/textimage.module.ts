import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextimagePageRoutingModule } from './textimage-routing.module';
import { TextimagePage } from './textimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextimagePageRoutingModule
  ],
  declarations: [TextimagePage]
})
export class TextimagePageModule {}
