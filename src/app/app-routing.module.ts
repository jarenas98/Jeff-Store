import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

import { from } from 'rxjs';

const routes: Routes = [
  {
    /**
     * para la url seca
     */
    path: '',
    component: LayoutComponent,
      /**el children se usa para que todos los hijos usen
       * el compónent general en este caso LayoutComponent
       */
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        /**
         * permite cargar modulos
         */
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)

      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)

      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {

    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  },
  {

    path: 'demo',
    component: DemoComponent

  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  {
    /**
     * para rutas no encontradas dentro del proyecto
     */
     path: '**',
    component: PageNotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
