package com.rll.microservices.common.model.base;

import java.util.List;

public class AbstractMultipleObjectResponse<T extends java.io.Serializable> extends AbstractResponse {

    private List<T> result;

    public List<T> getResult() {
        return result;
    }

    public void setResult(List<T> result) {
        this.result = result;
    }
}
