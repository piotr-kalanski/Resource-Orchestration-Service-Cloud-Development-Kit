package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.792Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnBase64Encode")
public class FnBase64Encode extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnBase64Encode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnBase64Encode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::Base64`` function.
     * <p>
     * @param data The string value you want to convert to Base64. This parameter is required.
     */
    public FnBase64Encode(final @org.jetbrains.annotations.NotNull java.lang.Object data) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { data });
    }
}
