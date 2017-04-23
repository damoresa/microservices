import { Author } from './author';

export class Book {
    constructor(
        public book_id: string,
        public book_isbn: string,
        public book_title: string,
        public book_description: string,
        public author_id: string,
        public author?: Author
    ) { }
}