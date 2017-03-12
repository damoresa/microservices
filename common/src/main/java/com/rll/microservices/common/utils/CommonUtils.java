package com.rll.microservices.common.utils;

import com.rll.microservices.common.model.operations.Error;
import com.rll.microservices.common.model.operations.OperationResponse;
import com.rll.microservices.common.model.operations.Success;

public final class CommonUtils {

    private CommonUtils() {}

    public static void generateSuccess(OperationResponse response, String message) {
        Success success = new Success();
        success.setMessage(message);

        response.setSuccess(success);
    }

    public static void generateError(OperationResponse response, String code, String message) {
        Error error = new Error();
        error.setCode(code);
        error.setMessage(message);

        response.setError(error);
    }
}
