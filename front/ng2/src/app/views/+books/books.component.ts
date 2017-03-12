import { Component, OnInit } from '@angular/core';

import { Book } from "./book";
import { BooksResponse } from "./books.response";
import { BooksService } from "./books.service";

@Component({
    selector: 'books-component',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

    books: Array<Book> = new Array<Book>();
    private booksService: BooksService;

    constructor(_booksService: BooksService) {
        this.booksService = _booksService;
    }

    ngOnInit() {
        this.booksService.getBooks()
            .subscribe((response: BooksResponse) => {
                if (response.error === undefined
                    || response.error === null)
                {
                    this.books = response.result;
                }
                else
                {
                    // FIXME
                    // Implement a toast to report these messages
                    console.log('Error ' + response.error.message);
                }
            });
    }
}