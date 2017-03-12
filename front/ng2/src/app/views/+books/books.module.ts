import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';
import { BooksService } from "./books.service";

@NgModule({
    imports: [
        BooksRoutingModule,
        CommonModule
    ],
    declarations: [
        BooksComponent
    ],
    providers: [
        BooksService
    ]
})
export class BooksModule {

}