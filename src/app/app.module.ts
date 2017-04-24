import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AmazonService } from './amazon.service';

import { AuthResponseComponent } from './auth-response/auth-response.component';
import { StartComponent } from './start/start.component';
import { StartModule } from './start/start.module';
@NgModule({
    declarations: [
        AppComponent,
        AuthResponseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        StartModule
    ],
    providers: [
        AmazonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
