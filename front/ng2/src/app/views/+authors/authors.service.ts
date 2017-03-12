import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthorsResponse } from "./authors.response";

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
}