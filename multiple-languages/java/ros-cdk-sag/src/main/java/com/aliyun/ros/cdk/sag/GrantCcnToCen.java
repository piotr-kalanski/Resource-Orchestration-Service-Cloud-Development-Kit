package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  `ALIYUN::SAG::GrantCcnToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.445Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.GrantCcnToCen")
public class GrantCcnToCen extends com.aliyun.ros.cdk.core.Resource {

    protected GrantCcnToCen(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GrantCcnToCen(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
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
    public GrantCcnToCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.GrantCcnToCenProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public GrantCcnToCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.GrantCcnToCenProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CcnInstanceId: The ID of the CCN instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCcnInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrCcnInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CenInstanceId: The ID of the CEN instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.GrantCcnToCen}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.GrantCcnToCen> {
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
        private final com.aliyun.ros.cdk.sag.GrantCcnToCenProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.GrantCcnToCenProps.Builder();
        }

        /**
         * Property ccnInstanceId: The ID of the CCN instance.
         * <p>
         * @return {@code this}
         * @param ccnInstanceId Property ccnInstanceId: The ID of the CCN instance. This parameter is required.
         */
        public Builder ccnInstanceId(final java.lang.String ccnInstanceId) {
            this.props.ccnInstanceId(ccnInstanceId);
            return this;
        }
        /**
         * Property ccnInstanceId: The ID of the CCN instance.
         * <p>
         * @return {@code this}
         * @param ccnInstanceId Property ccnInstanceId: The ID of the CCN instance. This parameter is required.
         */
        public Builder ccnInstanceId(final com.aliyun.ros.cdk.core.IResolvable ccnInstanceId) {
            this.props.ccnInstanceId(ccnInstanceId);
            return this;
        }

        /**
         * Property cenInstanceId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenInstanceId Property cenInstanceId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenInstanceId(final java.lang.String cenInstanceId) {
            this.props.cenInstanceId(cenInstanceId);
            return this;
        }
        /**
         * Property cenInstanceId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenInstanceId Property cenInstanceId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenInstanceId(final com.aliyun.ros.cdk.core.IResolvable cenInstanceId) {
            this.props.cenInstanceId(cenInstanceId);
            return this;
        }

        /**
         * Property cenUid: The ID of the account to which the CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenUid Property cenUid: The ID of the account to which the CEN instance belongs. This parameter is required.
         */
        public Builder cenUid(final java.lang.String cenUid) {
            this.props.cenUid(cenUid);
            return this;
        }
        /**
         * Property cenUid: The ID of the account to which the CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenUid Property cenUid: The ID of the account to which the CEN instance belongs. This parameter is required.
         */
        public Builder cenUid(final com.aliyun.ros.cdk.core.IResolvable cenUid) {
            this.props.cenUid(cenUid);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.GrantCcnToCen}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.GrantCcnToCen build() {
            return new com.aliyun.ros.cdk.sag.GrantCcnToCen(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
