import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './views/home/home.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        HomeModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
