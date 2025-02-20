package com.aliyun.ros.cdk.core;

/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.
 * <p>
 * <code>Fn::And</code> acts as an AND operator. The minimum number of
 * conditions that you can include is 2, and the maximum is 10.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.792Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnAnd")
public class FnAnd extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnAnd(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnAnd(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public FnAnd(final @org.jetbrains.annotations.NotNull java.lang.Object... condition) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.Arrays.<Object>stream(condition).toArray(Object[]::new));
    }
}
