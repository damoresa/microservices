import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ReleasesResponse } from './releases.response';

@Injectable()
export class ReleasesService {

    private endpoint: string;
    private http: Http;

    constructor(_http: Http) {
        this.endpoint = '/releases-service/releases';
        this.http = _http;
    }

    getReleases(): Observable<ReleasesResponse> {

        return this.http.get(this.endpoint)
            .map((response) => response ? response.json() : {})
            .catch((error:any) => Observable.throw('Server error'));
    }
}