import { Author } from './author';
import { Error } from './../../common/error';

export class AuthorResponse {
    constructor(
        public result: Author,
        public error: Error
    ) { }
}