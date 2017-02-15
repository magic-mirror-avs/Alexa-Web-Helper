import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AmazonService } from './amazon.service';

import { AuthResponseComponent } from './auth-response/auth-response.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AmazonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
