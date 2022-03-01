import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { bootstap, Components } from './declaration';
import { LoginService } from './services/login.service';
import { MeetupsService } from './services/Meetups.service';


@NgModule({
  declarations: Components,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, MeetupsService],
  bootstrap: bootstap
})
export class AppModule { }
