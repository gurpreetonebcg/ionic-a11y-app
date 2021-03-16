import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderPagePage } from './slider-page.page';

const routes: Routes = [
  {
    path: '',
    component: SliderPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderPagePageRoutingModule {}
