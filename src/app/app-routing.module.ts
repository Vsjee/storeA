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
  {
    path: `${publicRoutes.PRODUCTS}/:${publicRoutes.PRODUCT_ID}`,
    loadChildren: () => import('./modules').then((m) => m.ProductInfoModule),
  },
  {
    path: `${publicRoutes.SUPPORT}`,
    loadChildren: () => import('./modules').then((m) => m.SupportModule),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./utils').then((c) => c.NotFoundRouteComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
