import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Author } from "../../common/author";
import { AuthorResponse } from "./author.response";
import { AuthorsResponse } from "./authors.response";
import { OperationResponse } from './../../common/operation.response';

@Injectable()
export class AuthorsService {

    private endpoint: string;
    private http: Http;

    constructor(_http: Http) {
        this.endpoint = '/authors-service/authors';
        this.http = _http;
    }

    getAuthors(): Observable<AuthorsResponse> {
        return this.http.get(this.endpoint)
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }

    getAuthor(id: string): Observable<AuthorResponse> {
        return this.http.get(this.endpoint + '/' + id)
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }

    addAuthor(author: Author): Observable<OperationResponse>  {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.endpoint, JSON.stringify(author), { headers: headers })
            .map((response: Response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }
}