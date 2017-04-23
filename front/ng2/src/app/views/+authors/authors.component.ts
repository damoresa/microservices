import { Component, OnInit } from '@angular/core';

import { Author } from '../../common/author';
import { AuthorsResponse } from './authors.response';
import { AuthorsService } from './authors.service';
import { OperationResponse } from './../../common/operation.response';

@Component({
    selector: 'authors-component',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

    authors: Array<Author> = new Array<Author>();
    model: Author = new Author('', '', '');
    private authorsService: AuthorsService;

    constructor(_authorsService: AuthorsService) {
        this.authorsService = _authorsService;
    }

    ngOnInit() {
        this.loadAuthors();
    }

    loadAuthors() {
        this.authorsService.getAuthors()
            .subscribe((response: AuthorsResponse) => {
                this.authors = response.result;
            });
    }

    submit() {
        this.authorsService.addAuthor(this.model)
            .subscribe((response: OperationResponse) => {
                this.clearForm();
                this.loadAuthors();
            });
    }

    clearForm() {
        this.model = new Author('', '', '');
    }
}