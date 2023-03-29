import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { publicRoutes } from './models';

const routes: Routes = [
  { path: '', redirectTo: `${publicRoutes.HOME}`, pathMatch: 'full' },
  {
    path: `${publicRoutes.HOME}`,
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: `${publicRoutes.PRODUCTS}`,
    loadChildren: () => import('./modules').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
