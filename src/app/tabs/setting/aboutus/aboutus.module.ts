import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutusPageRoutingModule } from './aboutus-routing.module';

import { AboutusPage } from './aboutus.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AboutusPage]
})
export class AboutusPageModule {}
