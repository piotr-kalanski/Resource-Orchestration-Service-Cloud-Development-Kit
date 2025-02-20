package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.270Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return null;
    }

    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicies() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object groupName;
        java.lang.Object comments;
        java.lang.Object policies;

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getComments}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder comments(java.lang.String comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getComments}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder comments(com.aliyun.ros.cdk.core.IResolvable comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(com.aliyun.ros.cdk.core.IResolvable policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(java.util.List<? extends java.lang.Object> policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object groupName;
        private final java.lang.Object comments;
        private final java.lang.Object policies;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comments = software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policies = software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.comments = builder.comments;
            this.policies = builder.policies;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getComments() {
            return this.comments;
        }

        @Override
        public final java.lang.Object getPolicies() {
            return this.policies;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getComments() != null) {
                data.set("comments", om.valueToTree(this.getComments()));
            }
            if (this.getPolicies() != null) {
                data.set("policies", om.valueToTree(this.getPolicies()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            if (this.comments != null ? !this.comments.equals(that.comments) : that.comments != null) return false;
            return this.policies != null ? this.policies.equals(that.policies) : that.policies == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.comments != null ? this.comments.hashCode() : 0);
            result = 31 * result + (this.policies != null ? this.policies.hashCode() : 0);
            return result;
        }
    }
}
