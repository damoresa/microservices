import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'authors', loadChildren: './views/+authors/authors.module#AuthorsModule' },
    { path: 'books', loadChildren: './views/+books/books.module#BooksModule' },
    { path: 'releases', loadChildren: './views/+releases/releases.module#ReleasesModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}