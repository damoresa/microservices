import { Component, OnInit } from '@angular/core';

import { Release } from './../../common/release';
import { ReleasesResponse } from './releases.response';
import { ReleasesService } from './releases.service';

@Component({
    selector: 'releases-component',
    templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {

    releases: Array<Release>;
    private releasesService: ReleasesService;

    constructor(_releasesService: ReleasesService) {
        this.releasesService = _releasesService;
    }

    ngOnInit() {
        this.releasesService.getReleases()
            .subscribe((response: ReleasesResponse) => {
                this.releases = response.result;
            });
    }
}