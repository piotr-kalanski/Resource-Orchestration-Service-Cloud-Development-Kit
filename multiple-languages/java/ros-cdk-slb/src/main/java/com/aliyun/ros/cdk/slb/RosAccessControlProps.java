package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::AccessControl`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.475Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosAccessControlProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessControlProps.Jsii$Proxy.class)
public interface RosAccessControlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntrys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccessControlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessControlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessControlProps> {
        java.lang.Object aclName;
        java.lang.Object aclEntrys;
        java.lang.Object addressIpVersion;
        java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags;

        /**
         * Sets the value of {@link RosAccessControlProps#getAclName}
         * @param aclName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclName(java.lang.String aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAclName}
         * @param aclName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclName(com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAclEntrys}
         * @param aclEntrys the value to be set.
         * @return {@code this}
         */
        public Builder aclEntrys(com.aliyun.ros.cdk.core.IResolvable aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAclEntrys}
         * @param aclEntrys the value to be set.
         * @return {@code this}
         */
        public Builder aclEntrys(java.util.List<? extends java.lang.Object> aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessControlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessControlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessControlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessControlProps {
        private final java.lang.Object aclName;
        private final java.lang.Object aclEntrys;
        private final java.lang.Object addressIpVersion;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclName = software.amazon.jsii.Kernel.get(this, "aclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntrys = software.amazon.jsii.Kernel.get(this, "aclEntrys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclName = java.util.Objects.requireNonNull(builder.aclName, "aclName is required");
            this.aclEntrys = builder.aclEntrys;
            this.addressIpVersion = builder.addressIpVersion;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAclName() {
            return this.aclName;
        }

        @Override
        public final java.lang.Object getAclEntrys() {
            return this.aclEntrys;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclName", om.valueToTree(this.getAclName()));
            if (this.getAclEntrys() != null) {
                data.set("aclEntrys", om.valueToTree(this.getAclEntrys()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosAccessControlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessControlProps.Jsii$Proxy that = (RosAccessControlProps.Jsii$Proxy) o;

            if (!aclName.equals(that.aclName)) return false;
            if (this.aclEntrys != null ? !this.aclEntrys.equals(that.aclEntrys) : that.aclEntrys != null) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclName.hashCode();
            result = 31 * result + (this.aclEntrys != null ? this.aclEntrys.hashCode() : 0);
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
