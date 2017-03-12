import {Error} from "./error";
import {Success} from "./success";

export class OperationResponse {
    constructor(
        public success: Success,
        public error: Error
    ) { }
}