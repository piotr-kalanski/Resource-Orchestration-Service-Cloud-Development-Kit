package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS template type:  `ALIYUN::ApiGateway::PluginAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.932Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosPluginAttachment")
public class RosPluginAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPluginAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPluginAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosPluginAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ApiGateway::PluginAttachment`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosPluginAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApiId() {
        return software.amazon.jsii.Kernel.get(this, "apiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "apiId", java.util.Objects.requireNonNull(value, "apiId is required"));
    }

    /**
     */
    public void setApiId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiId", java.util.Objects.requireNonNull(value, "apiId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPluginId() {
        return software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPluginId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pluginId", java.util.Objects.requireNonNull(value, "pluginId is required"));
    }

    /**
     */
    public void setPluginId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pluginId", java.util.Objects.requireNonNull(value, "pluginId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStageName() {
        return software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStageName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "stageName", java.util.Objects.requireNonNull(value, "stageName is required"));
    }

    /**
     */
    public void setStageName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stageName", java.util.Objects.requireNonNull(value, "stageName is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosPluginAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosPluginAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apigateway.RosPluginAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosPluginAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param apiId This parameter is required.
         */
        public Builder apiId(final java.lang.String apiId) {
            this.props.apiId(apiId);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiId This parameter is required.
         */
        public Builder apiId(final com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.props.apiId(apiId);
            return this;
        }

        /**
         * @return {@code this}
         * @param pluginId This parameter is required.
         */
        public Builder pluginId(final java.lang.String pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }
        /**
         * @return {@code this}
         * @param pluginId This parameter is required.
         */
        public Builder pluginId(final com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }

        /**
         * @return {@code this}
         * @param stageName This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * @return {@code this}
         * @param stageName This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosPluginAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosPluginAttachment build() {
            return new com.aliyun.ros.cdk.apigateway.RosPluginAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
