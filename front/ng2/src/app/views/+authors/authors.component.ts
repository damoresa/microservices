import { Component, OnInit } from '@angular/core';

import { Author } from "./author";
import { AuthorsResponse } from "./authors.response";
import { AuthorsService } from "./authors.service";

@Component({
    selector: 'authors-component',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

    authors: Array<Author> = new Array<Author>();
    private authorsService: AuthorsService;

    constructor(_authorsService: AuthorsService) {
        this.authorsService = _authorsService;
    }

    ngOnInit() {
        this.authorsService.getAuthors()
            .subscribe((response: AuthorsResponse) => {
                if (response.error === undefined
                    || response.error === null)
                {
                    this.authors = response.result;
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