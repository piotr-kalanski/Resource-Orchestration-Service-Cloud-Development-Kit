package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  `ALIYUN::SAG::ACLRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.443Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.ACLRule")
public class ACLRule extends com.aliyun.ros.cdk.core.Resource {

    protected ACLRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ACLRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
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
    public ACLRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.ACLRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ACLRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.ACLRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AcrId: Access control rule ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcrId() {
        return software.amazon.jsii.Kernel.get(this, "attrAcrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.ACLRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.ACLRule> {
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
        private final com.aliyun.ros.cdk.sag.ACLRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.ACLRuleProps.Builder();
        }

        /**
         * Property aclId: Access control ID.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         */
        public Builder aclId(final java.lang.String aclId) {
            this.props.aclId(aclId);
            return this;
        }
        /**
         * Property aclId: Access control ID.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         */
        public Builder aclId(final com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.props.aclId(aclId);
            return this;
        }

        /**
         * Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
         * <p>
         * @return {@code this}
         * @param destCidr Property destCidr: Destination address, CIDR format and IP address range in IPv4 format. This parameter is required.
         */
        public Builder destCidr(final java.lang.String destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }
        /**
         * Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
         * <p>
         * @return {@code this}
         * @param destCidr Property destCidr: Destination address, CIDR format and IP address range in IPv4 format. This parameter is required.
         */
        public Builder destCidr(final com.aliyun.ros.cdk.core.IResolvable destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }

        /**
         * Property destPortRange: Destination port range, 80/80.
         * <p>
         * @return {@code this}
         * @param destPortRange Property destPortRange: Destination port range, 80/80. This parameter is required.
         */
        public Builder destPortRange(final java.lang.String destPortRange) {
            this.props.destPortRange(destPortRange);
            return this;
        }
        /**
         * Property destPortRange: Destination port range, 80/80.
         * <p>
         * @return {@code this}
         * @param destPortRange Property destPortRange: Destination port range, 80/80. This parameter is required.
         */
        public Builder destPortRange(final com.aliyun.ros.cdk.core.IResolvable destPortRange) {
            this.props.destPortRange(destPortRange);
            return this;
        }

        /**
         * Property direction: Regular direction.
         * <p>
         * Value: in|out
         * <p>
         * @return {@code this}
         * @param direction Property direction: Regular direction. This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * Property direction: Regular direction.
         * <p>
         * Value: in|out
         * <p>
         * @return {@code this}
         * @param direction Property direction: Regular direction. This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * Property ipProtocol: Protocol, not case sensitive.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Protocol, not case sensitive. This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * Property ipProtocol: Protocol, not case sensitive.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Protocol, not case sensitive. This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * Property policy: Access: accept|drop.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Access: accept|drop. This parameter is required.
         */
        public Builder policy(final java.lang.String policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * Property policy: Access: accept|drop.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Access: accept|drop. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format. This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format. This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * Property sourcePortRange: Source port range, 80/80.
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: Source port range, 80/80. This parameter is required.
         */
        public Builder sourcePortRange(final java.lang.String sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }
        /**
         * Property sourcePortRange: Source port range, 80/80.
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: Source port range, 80/80. This parameter is required.
         */
        public Builder sourcePortRange(final com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }

        /**
         * Property description: Rule description information, ranging from 1 to 512 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Rule description information, ranging from 1 to 512 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Rule description information, ranging from 1 to 512 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Rule description information, ranging from 1 to 512 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property priority: Priority, ranging from 1 to 100.
         * <p>
         * Default: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority, ranging from 1 to 100. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: Priority, ranging from 1 to 100.
         * <p>
         * Default: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority, ranging from 1 to 100. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.ACLRule}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.ACLRule build() {
            return new com.aliyun.ros.cdk.sag.ACLRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
