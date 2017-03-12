package com.rll.microservices.common.model.operations;

import com.rll.microservices.common.model.base.AbstractResponse;

public class OperationResponse extends AbstractResponse {

    private Success success;

    public Success getSuccess() {
        return success;
    }

    public void setSuccess(Success success) {
        this.success = success;
    }
}
