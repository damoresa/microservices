import { Release } from "../../common/release";
import { Error } from "./../../common/error";

export class ReleasesResponse {
    constructor(
        public result: Release[],
        public error: Error
    ) { }
}