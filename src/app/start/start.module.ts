import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AmazonService } from '../amazon.service';

import { StartComponent } from './start.component';

@NgModule({
    declarations: [
        StartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AmazonService
    ],
    exports: [
        StartComponent
    ]
})
export class StartModule { }
