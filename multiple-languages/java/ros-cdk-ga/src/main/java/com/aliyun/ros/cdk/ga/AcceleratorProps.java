package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::Accelerator`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.894Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.AcceleratorProps")
@software.amazon.jsii.Jsii.Proxy(AcceleratorProps.Jsii$Proxy.class)
public interface AcceleratorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property duration: The Duration of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDuration();

    /**
     * Property pricingCycle: The PricingCycle of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPricingCycle();

    /**
     * Property spec: The instance type of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

    /**
     * Property acceleratorName: The Name of the GA instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceleratorName() {
        return null;
    }

    /**
     * Property autoPay: The AutoPay of the GA instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUseCoupon() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AcceleratorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AcceleratorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AcceleratorProps> {
        java.lang.Object duration;
        java.lang.Object pricingCycle;
        java.lang.Object spec;
        java.lang.Object acceleratorName;
        java.lang.Object autoPay;
        java.lang.Object autoUseCoupon;

        /**
         * Sets the value of {@link AcceleratorProps#getDuration}
         * @param duration Property duration: The Duration of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getDuration}
         * @param duration Property duration: The Duration of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The PricingCycle of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The PricingCycle of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getSpec}
         * @param spec Property spec: The instance type of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getSpec}
         * @param spec Property spec: The instance type of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAcceleratorName}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance.
         * @return {@code this}
         */
        public Builder acceleratorName(java.lang.String acceleratorName) {
            this.acceleratorName = acceleratorName;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAcceleratorName}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance.
         * @return {@code this}
         */
        public Builder acceleratorName(com.aliyun.ros.cdk.core.IResolvable acceleratorName) {
            this.acceleratorName = acceleratorName;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoPay}
         * @param autoPay Property autoPay: The AutoPay of the GA instance.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.String autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoPay}
         * @param autoPay Property autoPay: The AutoPay of the GA instance.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * @return {@code this}
         */
        public Builder autoUseCoupon(com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AcceleratorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AcceleratorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AcceleratorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AcceleratorProps {
        private final java.lang.Object duration;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object spec;
        private final java.lang.Object acceleratorName;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoUseCoupon;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceleratorName = software.amazon.jsii.Kernel.get(this, "acceleratorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.duration = java.util.Objects.requireNonNull(builder.duration, "duration is required");
            this.pricingCycle = java.util.Objects.requireNonNull(builder.pricingCycle, "pricingCycle is required");
            this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
            this.acceleratorName = builder.acceleratorName;
            this.autoPay = builder.autoPay;
            this.autoUseCoupon = builder.autoUseCoupon;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getAcceleratorName() {
            return this.acceleratorName;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("duration", om.valueToTree(this.getDuration()));
            data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            data.set("spec", om.valueToTree(this.getSpec()));
            if (this.getAcceleratorName() != null) {
                data.set("acceleratorName", om.valueToTree(this.getAcceleratorName()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.AcceleratorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AcceleratorProps.Jsii$Proxy that = (AcceleratorProps.Jsii$Proxy) o;

            if (!duration.equals(that.duration)) return false;
            if (!pricingCycle.equals(that.pricingCycle)) return false;
            if (!spec.equals(that.spec)) return false;
            if (this.acceleratorName != null ? !this.acceleratorName.equals(that.acceleratorName) : that.acceleratorName != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            return this.autoUseCoupon != null ? this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon == null;
        }

        @Override
        public final int hashCode() {
            int result = this.duration.hashCode();
            result = 31 * result + (this.pricingCycle.hashCode());
            result = 31 * result + (this.spec.hashCode());
            result = 31 * result + (this.acceleratorName != null ? this.acceleratorName.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            return result;
        }
    }
}
