import { Book } from "../../common/book";
import { Error } from "./../../common/error";

export class BookResponse {
    constructor(
        public result: Book,
        public error: Error
    ) { }
}