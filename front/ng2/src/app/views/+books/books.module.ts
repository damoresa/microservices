import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { BookDetailComponent } from './book.detail.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';
import { BooksService } from "./books.service";

import { AuthorsService } from './../+authors/authors.service';

@NgModule({
    imports: [
        BooksRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        BookDetailComponent,
        BooksComponent
    ],
    providers: [
        AuthorsService,
        BooksService
    ]
})
export class BooksModule {

}