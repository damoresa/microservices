import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from "../../common/book";
import { BookResponse } from "./book.response";
import { BooksResponse } from "./books.response";
import { OperationResponse } from './../../common/operation.response';

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

    getBook(id: string): Observable<BookResponse> {
        return this.http.get(this.endpoint + '/' + id)
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }

    addBook(book: Book): Observable<OperationResponse> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.endpoint, JSON.stringify(book), { headers: headers })
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }
}