import { Author } from '../../common/author';
import { Error } from './../../common/error';

export class AuthorsResponse {
    constructor(
        public result: Author[],
        public error: Error
    ) { }
}