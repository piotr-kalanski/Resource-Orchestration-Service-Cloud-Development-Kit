package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::WafSwitch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.657Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.WafSwitch")
public class WafSwitch extends com.aliyun.ros.cdk.core.Resource {

    protected WafSwitch(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WafSwitch(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public WafSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.WafSwitchProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public WafSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.WafSwitchProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.WafSwitch}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.WafSwitch> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.waf.WafSwitchProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.WafSwitchProps.Builder();
        }

        /**
         * Property domain: Domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: Domain name. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: Domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: Domain name. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property instanceId: WAF instance ID.
         * <p>
         * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: WAF instance ID.
         * <p>
         * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property serviceOn: Web attack protection switch, the value of: 0: closed.
         * <p>
         * 1: indicate on.
         * <p>
         * @return {@code this}
         * @param serviceOn Property serviceOn: Web attack protection switch, the value of: 0: closed. This parameter is required.
         */
        public Builder serviceOn(final java.lang.Number serviceOn) {
            this.props.serviceOn(serviceOn);
            return this;
        }
        /**
         * Property serviceOn: Web attack protection switch, the value of: 0: closed.
         * <p>
         * 1: indicate on.
         * <p>
         * @return {@code this}
         * @param serviceOn Property serviceOn: Web attack protection switch, the value of: 0: closed. This parameter is required.
         */
        public Builder serviceOn(final com.aliyun.ros.cdk.core.IResolvable serviceOn) {
            this.props.serviceOn(serviceOn);
            return this;
        }

        /**
         * Property region: Examples of areas where the WAF.
         * <p>
         * Value:
         * cn: China mainland (default)
         * cn-hongkong: China HongKong and other overseas
         * <p>
         * @return {@code this}
         * @param region Property region: Examples of areas where the WAF. This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: Examples of areas where the WAF.
         * <p>
         * Value:
         * cn: China mainland (default)
         * cn-hongkong: China HongKong and other overseas
         * <p>
         * @return {@code this}
         * @param region Property region: Examples of areas where the WAF. This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.waf.WafSwitch}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.WafSwitch build() {
            return new com.aliyun.ros.cdk.waf.WafSwitch(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
