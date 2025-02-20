package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::JoinSecurityGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.398Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.JoinSecurityGroup")
public class JoinSecurityGroup extends com.aliyun.ros.cdk.core.Resource {

    protected JoinSecurityGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected JoinSecurityGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
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
    public JoinSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public JoinSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.JoinSecurityGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.JoinSecurityGroup> {
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
        private final com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps.Builder();
        }

        /**
         * Property securityGroupId: Security group id to join.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group id to join. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group id to join.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group id to join. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property instanceId: Instance Id to the join the security group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance Id to the join the security group. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance Id to the join the security group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance Id to the join the security group. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceIdList Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored. This parameter is required.
         */
        public Builder instanceIdList(final java.util.List<? extends java.lang.Object> instanceIdList) {
            this.props.instanceIdList(instanceIdList);
            return this;
        }
        /**
         * Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceIdList Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored. This parameter is required.
         */
        public Builder instanceIdList(final com.aliyun.ros.cdk.core.IResolvable instanceIdList) {
            this.props.instanceIdList(instanceIdList);
            return this;
        }

        /**
         * Property networkInterfaceList: Network interface list.
         * <p>
         * @return {@code this}
         * @param networkInterfaceList Property networkInterfaceList: Network interface list. This parameter is required.
         */
        public Builder networkInterfaceList(final java.util.List<? extends java.lang.Object> networkInterfaceList) {
            this.props.networkInterfaceList(networkInterfaceList);
            return this;
        }
        /**
         * Property networkInterfaceList: Network interface list.
         * <p>
         * @return {@code this}
         * @param networkInterfaceList Property networkInterfaceList: Network interface list. This parameter is required.
         */
        public Builder networkInterfaceList(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceList) {
            this.props.networkInterfaceList(networkInterfaceList);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.JoinSecurityGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.JoinSecurityGroup build() {
            return new com.aliyun.ros.cdk.ecs.JoinSecurityGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
