import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderPagePageRoutingModule } from './slider-page-routing.module';

import { SliderPagePage } from './slider-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPagePageRoutingModule
  ],
  declarations: [SliderPagePage]
})
export class SliderPagePageModule {}
