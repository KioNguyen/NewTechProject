import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { LoginComponent } from './login/login.component';  
import { DashboardComponent } from './dashboard/dashboard.component';  

import { AppComponent } from './app.component';
import { navHeaderComponent } from './Components/Blocks/navHeader/navHeader.component';
import { sliderComponent } from './Components/Blocks/slider/slider.component';
import { CategoriesComponent } from './Components/Blocks/Categories/Categories.component';


import { UserService } from './Services/user.service'

import { RoutingModule } from './app-routing.module';
// import { ListComponent } from './Components/Pages/list/list.component';


export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('app-id')  
      }  
    ]  
  );  
  return config;  
}  
@NgModule({
  declarations: [
    // BrowserModule,
    AppComponent,
    navHeaderComponent,
    sliderComponent,
    // ListComponent,
    CategoriesComponent,
    LoginComponent,
    DashboardComponent    
  ],
  imports: [
    HttpClientModule, BrowserModule, RoutingModule
  ],
  providers: [
    UserService,
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
