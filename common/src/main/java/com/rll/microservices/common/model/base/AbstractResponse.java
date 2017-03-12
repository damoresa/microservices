package com.rll.microservices.common.model.base;

public abstract class AbstractResponse implements java.io.Serializable {

    private Error error;

    public Error getError() {
        return error;
    }

    public void setError(Error error) {
        this.error = error;
    }
}
