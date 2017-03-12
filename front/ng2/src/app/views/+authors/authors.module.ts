import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors.routing';
import { AuthorsService } from "./authors.service";

@NgModule({
    imports: [
        AuthorsRoutingModule,
        CommonModule
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