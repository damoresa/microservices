import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesComponent} from './releases.component';

const routes: Routes = [
    { path: '', component: ReleasesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReleasesRoutingModule {

}