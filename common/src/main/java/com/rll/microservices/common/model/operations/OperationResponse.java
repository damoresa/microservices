package com.rll.microservices.common.model.operations;

public class OperationResponse implements java.io.Serializable {

    private Success success;
    private Error error;

    public Success getSuccess() {
        return success;
    }

    public void setSuccess(Success success) {
        this.success = success;
    }

    public Error getError() {
        return error;
    }

    public void setError(Error error) {
        this.error = error;
    }
}
