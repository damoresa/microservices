import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailComponent } from './book.detail.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: ':bookId', component: BookDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BooksRoutingModule {

}