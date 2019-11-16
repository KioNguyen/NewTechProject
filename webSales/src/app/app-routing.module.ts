import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    

import { HomeComponent } from './Components/Pages/home/home.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { ProductsComponent } from './Components/Pages/products/products.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { ListComponent } from './Components/Pages/list/list.component';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
  { path: '',  redirectTo: 'login',  pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' }},    
  { path: 'Dashboard', component: DashboardComponent, data: {title: 'Dashboard Page' }},
  { path: 'list', component: ListComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'detail', component: DetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: HomeComponent }
] 

@NgModule({
  declarations: [
    HomeComponent, DetailComponent, ProductsComponent, RegisterComponent, ListComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
