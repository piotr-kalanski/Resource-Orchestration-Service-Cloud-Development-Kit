package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::ServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.885Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosServerGroupProps.Jsii$Proxy.class)
public interface RosServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServerGroupProps> {
        java.lang.Object healthCheckConfig;
        java.lang.Object serverGroupName;
        java.lang.Object vpcId;
        java.lang.Object protocol;
        java.lang.Object resourceGroupId;
        java.lang.Object scheduler;
        java.lang.Object serverGroupType;
        java.lang.Object stickySessionConfig;

        /**
         * Sets the value of {@link RosServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.alb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getServerGroupName}
         * @param serverGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupName(java.lang.String serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getServerGroupName}
         * @param serverGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupName(com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getProtocol}
         * @param protocol the value to be set.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getProtocol}
         * @param protocol the value to be set.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getServerGroupType}
         * @param serverGroupType the value to be set.
         * @return {@code this}
         */
        public Builder serverGroupType(java.lang.String serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getServerGroupType}
         * @param serverGroupType the value to be set.
         * @return {@code this}
         */
        public Builder serverGroupType(com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig the value to be set.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.core.IResolvable stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig the value to be set.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServerGroupProps {
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object serverGroupName;
        private final java.lang.Object vpcId;
        private final java.lang.Object protocol;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverGroupType;
        private final java.lang.Object stickySessionConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupName = software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupType = software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stickySessionConfig = software.amazon.jsii.Kernel.get(this, "stickySessionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.healthCheckConfig = java.util.Objects.requireNonNull(builder.healthCheckConfig, "healthCheckConfig is required");
            this.serverGroupName = java.util.Objects.requireNonNull(builder.serverGroupName, "serverGroupName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.protocol = builder.protocol;
            this.resourceGroupId = builder.resourceGroupId;
            this.scheduler = builder.scheduler;
            this.serverGroupType = builder.serverGroupType;
            this.stickySessionConfig = builder.stickySessionConfig;
        }

        @Override
        public final java.lang.Object getHealthCheckConfig() {
            return this.healthCheckConfig;
        }

        @Override
        public final java.lang.Object getServerGroupName() {
            return this.serverGroupName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScheduler() {
            return this.scheduler;
        }

        @Override
        public final java.lang.Object getServerGroupType() {
            return this.serverGroupType;
        }

        @Override
        public final java.lang.Object getStickySessionConfig() {
            return this.stickySessionConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
            data.set("serverGroupName", om.valueToTree(this.getServerGroupName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getProtocol() != null) {
                data.set("protocol", om.valueToTree(this.getProtocol()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScheduler() != null) {
                data.set("scheduler", om.valueToTree(this.getScheduler()));
            }
            if (this.getServerGroupType() != null) {
                data.set("serverGroupType", om.valueToTree(this.getServerGroupType()));
            }
            if (this.getStickySessionConfig() != null) {
                data.set("stickySessionConfig", om.valueToTree(this.getStickySessionConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServerGroupProps.Jsii$Proxy that = (RosServerGroupProps.Jsii$Proxy) o;

            if (!healthCheckConfig.equals(that.healthCheckConfig)) return false;
            if (!serverGroupName.equals(that.serverGroupName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverGroupType != null ? !this.serverGroupType.equals(that.serverGroupType) : that.serverGroupType != null) return false;
            return this.stickySessionConfig != null ? this.stickySessionConfig.equals(that.stickySessionConfig) : that.stickySessionConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckConfig.hashCode();
            result = 31 * result + (this.serverGroupName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverGroupType != null ? this.serverGroupType.hashCode() : 0);
            result = 31 * result + (this.stickySessionConfig != null ? this.stickySessionConfig.hashCode() : 0);
            return result;
        }
    }
}
