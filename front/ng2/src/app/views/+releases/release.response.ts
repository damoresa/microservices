import { Release } from "../../common/release";
import { Error } from "./../../common/error";

export class ReleaseResponse {
    constructor(
        public result: Release,
        public error: Error
    ) { }
}