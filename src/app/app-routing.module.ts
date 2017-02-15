import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResponseComponent } from './auth-response/auth-response.component';

const appRoutes: Routes = [
    { path: 'authresponse', component: AuthResponseComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
