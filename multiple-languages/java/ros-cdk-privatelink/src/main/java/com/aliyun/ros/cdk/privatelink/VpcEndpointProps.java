package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.251Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointProps")
@software.amazon.jsii.Jsii.Proxy(VpcEndpointProps.Jsii$Proxy.class)
public interface VpcEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property securityGroupId: The security group associated with the endpoint network interface.
     * <p>
     * The security group can control the data communication from the VPC to the endpoint network interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vpcId: The VPC to which the endpoint belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property endpointDescription: The description of the endpoint.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointDescription() {
        return null;
    }

    /**
     * Property endpointName: The name of the endpoint.
     * <p>
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointName() {
        return null;
    }

    /**
     * Property serviceId: The endpoint service that is associated with the endpoint.
     * <p>
     * One of ServiceId and ServiceName is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
        return null;
    }

    /**
     * Property serviceName: The name of the endpoint service that is associated with the endpoint.
     * <p>
     * One of ServiceId and ServiceName is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return null;
    }

    /**
     * Property zone:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZone() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcEndpointProps> {
        java.lang.Object securityGroupId;
        java.lang.Object vpcId;
        java.lang.Object endpointDescription;
        java.lang.Object endpointName;
        java.lang.Object serviceId;
        java.lang.Object serviceName;
        java.lang.Object zone;

        /**
         * Sets the value of {@link VpcEndpointProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         *                        The security group can control the data communication from the VPC to the endpoint network interface.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         *                        The security group can control the data communication from the VPC to the endpoint network interface.
         * @return {@code this}
         */
        public Builder securityGroupId(java.util.List<? extends java.lang.Object> securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: The description of the endpoint.
         *                            The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder endpointDescription(java.lang.String endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: The description of the endpoint.
         *                            The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder endpointDescription(com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the endpoint.
         *                     The name must be 2 to 128 characters in length and can contain digits, underscores
         *                     (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder endpointName(java.lang.String endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the endpoint.
         *                     The name must be 2 to 128 characters in length and can contain digits, underscores
         *                     (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder endpointName(com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint.
         *                  One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceId(java.lang.String serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint.
         *                  One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceName}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint.
         *                    One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceName}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint.
         *                    One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZone}
         * @param zone Property zone:.
         * @return {@code this}
         */
        public Builder zone(com.aliyun.ros.cdk.core.IResolvable zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZone}
         * @param zone Property zone:.
         * @return {@code this}
         */
        public Builder zone(java.util.List<? extends java.lang.Object> zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcEndpointProps {
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vpcId;
        private final java.lang.Object endpointDescription;
        private final java.lang.Object endpointName;
        private final java.lang.Object serviceId;
        private final java.lang.Object serviceName;
        private final java.lang.Object zone;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointDescription = software.amazon.jsii.Kernel.get(this, "endpointDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointName = software.amazon.jsii.Kernel.get(this, "endpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zone = software.amazon.jsii.Kernel.get(this, "zone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.endpointDescription = builder.endpointDescription;
            this.endpointName = builder.endpointName;
            this.serviceId = builder.serviceId;
            this.serviceName = builder.serviceName;
            this.zone = builder.zone;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getEndpointDescription() {
            return this.endpointDescription;
        }

        @Override
        public final java.lang.Object getEndpointName() {
            return this.endpointName;
        }

        @Override
        public final java.lang.Object getServiceId() {
            return this.serviceId;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getZone() {
            return this.zone;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getEndpointDescription() != null) {
                data.set("endpointDescription", om.valueToTree(this.getEndpointDescription()));
            }
            if (this.getEndpointName() != null) {
                data.set("endpointName", om.valueToTree(this.getEndpointName()));
            }
            if (this.getServiceId() != null) {
                data.set("serviceId", om.valueToTree(this.getServiceId()));
            }
            if (this.getServiceName() != null) {
                data.set("serviceName", om.valueToTree(this.getServiceName()));
            }
            if (this.getZone() != null) {
                data.set("zone", om.valueToTree(this.getZone()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.VpcEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcEndpointProps.Jsii$Proxy that = (VpcEndpointProps.Jsii$Proxy) o;

            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.endpointDescription != null ? !this.endpointDescription.equals(that.endpointDescription) : that.endpointDescription != null) return false;
            if (this.endpointName != null ? !this.endpointName.equals(that.endpointName) : that.endpointName != null) return false;
            if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
            if (this.serviceName != null ? !this.serviceName.equals(that.serviceName) : that.serviceName != null) return false;
            return this.zone != null ? this.zone.equals(that.zone) : that.zone == null;
        }

        @Override
        public final int hashCode() {
            int result = this.securityGroupId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.endpointDescription != null ? this.endpointDescription.hashCode() : 0);
            result = 31 * result + (this.endpointName != null ? this.endpointName.hashCode() : 0);
            result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
            result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
            result = 31 * result + (this.zone != null ? this.zone.hashCode() : 0);
            return result;
        }
    }
}
