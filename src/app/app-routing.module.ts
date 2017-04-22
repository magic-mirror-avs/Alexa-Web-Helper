import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResponseComponent } from './auth-response/auth-response.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
    { path: '', component: StartComponent },
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
