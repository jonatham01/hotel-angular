import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { MenuLoginComponent } from './components/login/menu-login/menu-login.component';
import { LeftLoginComponent } from './components/login/left-login/left-login.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RoomPageComponent } from './components/room-page/room-page.component';
import { TokenInterceptor } from './interceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomsPageComponent,
    MenuLoginComponent,
    LeftLoginComponent,
    FormLoginComponent,
    RegisterComponent,
    HomeComponent,
    RoomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgStyle,
    FontAwesomeModule,

  ],
    providers:[
      {
        provide : HTTP_INTERCEPTORS, 
        useClass: TokenInterceptor, 
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
