import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors.routing';
import { AuthorsService } from "./authors.service";

@NgModule({
    imports: [
        AuthorsRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AuthorsComponent
    ],
    providers: [
        AuthorsService
    ]
})
export class AuthorsModule {

}