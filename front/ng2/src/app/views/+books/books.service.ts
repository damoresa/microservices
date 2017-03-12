import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BooksResponse } from "./books.response";

@Injectable()
export class BooksService {

    private endpoint: string;
    private http: Http;

    constructor(_http: Http) {
        this.endpoint = '/books-service/books';
        this.http = _http;
    }

    getBooks(): Observable<BooksResponse> {
        return this.http.get(this.endpoint)
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }
}