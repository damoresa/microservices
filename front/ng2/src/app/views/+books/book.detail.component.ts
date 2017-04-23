import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Author } from './../../common/author';
import { Book } from '../../common/book';
import { BookResponse } from './book.response';
import { BooksService } from './books.service';

@Component({
    selector: 'book-detail-component',
    templateUrl: './book.detail.component.html'
})
export class BookDetailComponent implements OnInit {

    book: Book = new Book('', '', '', '', '', new Author('', '', ''));

    private router: Router;
    private route: ActivatedRoute;
    private booksService: BooksService;

    constructor(_router: Router, _route: ActivatedRoute, _booksService: BooksService) {
        this.router = _router;
        this.route = _route;
        this.booksService = _booksService;
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            let id: string = params['bookId'];

            this.booksService.getBook(id)
                .subscribe((response: BookResponse) => {
                    this.book = response.result;
                    console.log(JSON.stringify(this.book));
                });
        });
    }

    back() {
        this.router.navigateByUrl('/books');
    }
}