import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { navHeaderComponent } from './Components/Blocks/navHeader/navHeader.component';
import { sliderComponent } from './Components/Blocks/slider/slider.component';
import { CategoriesComponent } from './Components/Blocks/Categories/Categories.component';

import { RoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    navHeaderComponent,
    sliderComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
