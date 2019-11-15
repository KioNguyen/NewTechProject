import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/Pages/home/home.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { ProductsComponent } from './Components/Pages/products/products.component';

const routesConfig: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: HomeComponent }
] 



@NgModule({
  declarations: [
    HomeComponent, DetailComponent, ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
