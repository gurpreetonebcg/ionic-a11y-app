import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-page',
    loadChildren: () => import('./Pages/list-page/list-page.module').then( m => m.ListPagePageModule)
  },  {
    path: 'slider-page',
    loadChildren: () => import('./Pages/slider-page/slider-page.module').then( m => m.SliderPagePageModule)
  },
  {
    path: 'signature-pad',
    loadChildren: () => import('./Pages/signature-pad/signature-pad.module').then( m => m.SignaturePadPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
