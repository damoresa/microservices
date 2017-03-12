package com.rll.microservices.common.model.base;

public abstract class AbstractSingleObjectResponse<T extends java.io.Serializable> extends AbstractResponse {

    private T result;

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }
}
