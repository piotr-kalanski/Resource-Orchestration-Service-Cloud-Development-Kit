package com.aliyun.ros.cdk.alb;

/**
 * A ROS resource type:  `ALIYUN::ALB::LoadBalancer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.LoadBalancer")
public class LoadBalancer extends com.aliyun.ros.cdk.core.Resource {

    protected LoadBalancer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ALB::LoadBalancer`.
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
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.LoadBalancerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ALB::LoadBalancer`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.LoadBalancerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DNSName: The domain name of the ALB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDnsName() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerEdition: The edition of the ALB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerEdition() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerEdition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The ID of the ALB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.LoadBalancer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.LoadBalancer> {
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
        private final com.aliyun.ros.cdk.alb.LoadBalancerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.LoadBalancerProps.Builder();
        }

        /**
         * Property addressType: The type of IP address that the ALB instance uses to provide services.
         * <p>
         * Valid values:
         * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
         * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The type of IP address that the ALB instance uses to provide services. This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props.addressType(addressType);
            return this;
        }
        /**
         * Property addressType: The type of IP address that the ALB instance uses to provide services.
         * <p>
         * Valid values:
         * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
         * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The type of IP address that the ALB instance uses to provide services. This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props.addressType(addressType);
            return this;
        }

        /**
         * Property loadBalancerBillingConfig: The configuration of the billing method.
         * <p>
         * @return {@code this}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.core.IResolvable loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }
        /**
         * Property loadBalancerBillingConfig: The configuration of the billing method.
         * <p>
         * @return {@code this}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.alb.RosLoadBalancer.LoadBalancerBillingConfigProperty loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }

        /**
         * Property loadBalancerEdition: The edition of the ALB instance.
         * <p>
         * Different editions have different limits and billing methods. Valid values:
         * Basic: Basic Edition
         * Standard: Standard Edition
         * <p>
         * @return {@code this}
         * @param loadBalancerEdition Property loadBalancerEdition: The edition of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerEdition(final java.lang.String loadBalancerEdition) {
            this.props.loadBalancerEdition(loadBalancerEdition);
            return this;
        }
        /**
         * Property loadBalancerEdition: The edition of the ALB instance.
         * <p>
         * Different editions have different limits and billing methods. Valid values:
         * Basic: Basic Edition
         * Standard: Standard Edition
         * <p>
         * @return {@code this}
         * @param loadBalancerEdition Property loadBalancerEdition: The edition of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerEdition(final com.aliyun.ros.cdk.core.IResolvable loadBalancerEdition) {
            this.props.loadBalancerEdition(loadBalancerEdition);
            return this;
        }

        /**
         * Property loadBalancerName: The name of the ALB instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The name of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: The name of the ALB instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The name of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property zoneMappings: The zones and the vSwitches in the zones.
         * <p>
         * You must specify at least two zones.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         */
        public Builder zoneMappings(final com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }
        /**
         * Property zoneMappings: The zones and the vSwitches in the zones.
         * <p>
         * You must specify at least two zones.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         */
        public Builder zoneMappings(final java.util.List<? extends java.lang.Object> zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }

        /**
         * Property addressAllocatedMode: The mode in which IP addresses are assigned.
         * <p>
         * Valid values:
         * Fixed: The ALB instance uses a static IP address.
         * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
         * <p>
         * @return {@code this}
         * @param addressAllocatedMode Property addressAllocatedMode: The mode in which IP addresses are assigned. This parameter is required.
         */
        public Builder addressAllocatedMode(final java.lang.String addressAllocatedMode) {
            this.props.addressAllocatedMode(addressAllocatedMode);
            return this;
        }
        /**
         * Property addressAllocatedMode: The mode in which IP addresses are assigned.
         * <p>
         * Valid values:
         * Fixed: The ALB instance uses a static IP address.
         * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
         * <p>
         * @return {@code this}
         * @param addressAllocatedMode Property addressAllocatedMode: The mode in which IP addresses are assigned. This parameter is required.
         */
        public Builder addressAllocatedMode(final com.aliyun.ros.cdk.core.IResolvable addressAllocatedMode) {
            this.props.addressAllocatedMode(addressAllocatedMode);
            return this;
        }

        /**
         * Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtectionEnabled Property deletionProtectionEnabled: Specifies whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtectionEnabled(final java.lang.Boolean deletionProtectionEnabled) {
            this.props.deletionProtectionEnabled(deletionProtectionEnabled);
            return this;
        }
        /**
         * Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtectionEnabled Property deletionProtectionEnabled: Specifies whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtectionEnabled(final com.aliyun.ros.cdk.core.IResolvable deletionProtectionEnabled) {
            this.props.deletionProtectionEnabled(deletionProtectionEnabled);
            return this;
        }

        /**
         * Property modificationProtectionConfig: The configuration of modification protection.
         * <p>
         * @return {@code this}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of modification protection. This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }
        /**
         * Property modificationProtectionConfig: The configuration of modification protection.
         * <p>
         * @return {@code this}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of modification protection. This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.alb.RosLoadBalancer.ModificationProtectionConfigProperty modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.LoadBalancer}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.LoadBalancer build() {
            return new com.aliyun.ros.cdk.alb.LoadBalancer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
