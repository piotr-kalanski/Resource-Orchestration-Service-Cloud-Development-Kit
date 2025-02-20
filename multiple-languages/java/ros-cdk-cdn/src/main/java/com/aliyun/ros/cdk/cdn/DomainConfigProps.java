package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a `ALIYUN::CDN::DomainConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.DomainConfigProps")
@software.amazon.jsii.Jsii.Proxy(DomainConfigProps.Jsii$Proxy.class)
public interface DomainConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainNames();

    /**
     * Property functions: function list, please refer to the CDN documentation for details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctions();

    /**
     * @return a {@link Builder} of {@link DomainConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainConfigProps> {
        java.lang.Object domainNames;
        java.lang.Object functions;

        /**
         * Sets the value of {@link DomainConfigProps#getDomainNames}
         * @param domainNames Property domainNames: Your accelerated domain name, separated by commas in English. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(java.lang.String domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getDomainNames}
         * @param domainNames Property domainNames: Your accelerated domain name, separated by commas in English. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getFunctions}
         * @param functions Property functions: function list, please refer to the CDN documentation for details. This parameter is required.
         * @return {@code this}
         */
        public Builder functions(java.lang.String functions) {
            this.functions = functions;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getFunctions}
         * @param functions Property functions: function list, please refer to the CDN documentation for details. This parameter is required.
         * @return {@code this}
         */
        public Builder functions(com.aliyun.ros.cdk.core.IResolvable functions) {
            this.functions = functions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainConfigProps {
        private final java.lang.Object domainNames;
        private final java.lang.Object functions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainNames = software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functions = software.amazon.jsii.Kernel.get(this, "functions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainNames = java.util.Objects.requireNonNull(builder.domainNames, "domainNames is required");
            this.functions = java.util.Objects.requireNonNull(builder.functions, "functions is required");
        }

        @Override
        public final java.lang.Object getDomainNames() {
            return this.domainNames;
        }

        @Override
        public final java.lang.Object getFunctions() {
            return this.functions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainNames", om.valueToTree(this.getDomainNames()));
            data.set("functions", om.valueToTree(this.getFunctions()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.DomainConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainConfigProps.Jsii$Proxy that = (DomainConfigProps.Jsii$Proxy) o;

            if (!domainNames.equals(that.domainNames)) return false;
            return this.functions.equals(that.functions);
        }

        @Override
        public final int hashCode() {
            int result = this.domainNames.hashCode();
            result = 31 * result + (this.functions.hashCode());
            return result;
        }
    }
}
