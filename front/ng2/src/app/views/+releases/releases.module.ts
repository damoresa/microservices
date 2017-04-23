import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ReleasesComponent } from './releases.component';
import { ReleasesRoutingModule } from './releases.routing';
import { ReleasesService } from './releases.service';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        ReleasesRoutingModule
    ],
    declarations: [
        ReleasesComponent
    ],
    providers: [
        ReleasesService
    ]
})
export class ReleasesModule {

}