import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './ui/buttonComponent/button.component';
import { NormalComponent } from './ui/normalComponent/normal.component';
import { SearchComponent } from './ui/searchComponent/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SearchComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
