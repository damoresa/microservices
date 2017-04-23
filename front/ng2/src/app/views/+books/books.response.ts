import { Book } from "../../common/book";
import { Error } from "./../../common/error";

export class BooksResponse {
    constructor(
        public result: Book[],
        public error: Error
    ) { }
}