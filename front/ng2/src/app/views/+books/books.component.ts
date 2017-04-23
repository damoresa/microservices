import { Component, OnInit } from '@angular/core';

import { Author } from './../../common/author';
import { AuthorsResponse } from './../+authors/authors.response';
import { AuthorsService } from './../+authors/authors.service';

import { Book } from './../../common/book';
import { BooksResponse } from './books.response';
import { BooksService } from './books.service';

import { OperationResponse } from './../../common/operation.response';

@Component({
    selector: 'books-component',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

    books: Array<Book> = new Array<Book>();
    authors: Array<Author> = new Array<Author>();

    model: Book = new Book('', '', '', '', '');
    
    private booksService: BooksService;
    private authorsService: AuthorsService;

    constructor(_booksService: BooksService, _authorsService: AuthorsService) {
        this.booksService = _booksService;
        this.authorsService = _authorsService;
    }

    ngOnInit() {
        this.loadBooks();
        this.loadAuthors();
    }

    loadAuthors() {
        this.authorsService.getAuthors()
            .subscribe((response: AuthorsResponse) => {
                this.authors = response.result;
            });
    }

    loadBooks() {
        this.booksService.getBooks()
            .subscribe((response: BooksResponse) => {
                this.books = response.result;
            });
    }

    submit() {
        this.booksService.addBook(this.model)
            .subscribe((response: OperationResponse) => {
                this.clearForm();
                this.loadBooks();
            });
    }

    clearForm() {
        this.model = new Book('', '', '', '', '');
    }
}