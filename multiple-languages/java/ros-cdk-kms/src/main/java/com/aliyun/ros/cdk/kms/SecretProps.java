package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a `ALIYUN::KMS::Secret`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.112Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.SecretProps")
@software.amazon.jsii.Jsii.Proxy(SecretProps.Jsii$Proxy.class)
public interface SecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property secretData: The value of the secret that you want to create.
     * <p>
     * Secrets Manager encrypts the secret
     * value and stores it in the initial version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretData();

    /**
     * Property secretName: The name of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretName();

    /**
     * Property versionId: The version number of the initial version.
     * <p>
     * Version numbers are unique in each secret
     * object.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersionId();

    /**
     * Property description: The description of the secret.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * <p>
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKeyId() {
        return null;
    }

    /**
     * Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
     * <p>
     * If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceDeleteWithoutRecovery() {
        return null;
    }

    /**
     * Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
     * <p>
     * Default value: 30
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecoveryWindowInDays() {
        return null;
    }

    /**
     * Property secretDataType: The type of the secret value.
     * <p>
     * Valid values:
     * text (default value)
     * binary
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretDataType() {
        return null;
    }

    /**
     * Property versionStages: The stage labels that mark the secret version.
     * <p>
     * ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionStages() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecretProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecretProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecretProps> {
        java.lang.Object secretData;
        java.lang.Object secretName;
        java.lang.Object versionId;
        java.lang.Object description;
        java.lang.Object encryptionKeyId;
        java.lang.Object forceDeleteWithoutRecovery;
        java.lang.Object recoveryWindowInDays;
        java.lang.Object secretDataType;
        java.lang.Object versionStages;

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: The value of the secret that you want to create. This parameter is required.
         *                   Secrets Manager encrypts the secret
         *                   value and stores it in the initial version.
         * @return {@code this}
         */
        public Builder secretData(java.lang.String secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: The value of the secret that you want to create. This parameter is required.
         *                   Secrets Manager encrypts the secret
         *                   value and stores it in the initial version.
         * @return {@code this}
         */
        public Builder secretData(com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(java.lang.String secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionId}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         *                  Version numbers are unique in each secret
         *                  object.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionId}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         *                  Version numbers are unique in each secret
         *                  object.
         * @return {@code this}
         */
        public Builder versionId(com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDescription}
         * @param description Property description: The description of the secret.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDescription}
         * @param description Property description: The description of the secret.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEncryptionKeyId}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
         *                        If you do not specify this parameter, Secrets Manager automatically creates an encryption
         *                        key to encrypt the secret.
         *                        Note The KMS CMK must be a symmetric key.
         * @return {@code this}
         */
        public Builder encryptionKeyId(java.lang.String encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEncryptionKeyId}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
         *                        If you do not specify this parameter, Secrets Manager automatically creates an encryption
         *                        key to encrypt the secret.
         *                        Note The KMS CMK must be a symmetric key.
         * @return {@code this}
         */
        public Builder encryptionKeyId(com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         *                                   If this parameter is set to true, the secret cannot be recovered. Valid values:
         *                                   true
         *                                   false (default value)
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(java.lang.Boolean forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         *                                   If this parameter is set to true, the secret cannot be recovered. Valid values:
         *                                   true
         *                                   false (default value)
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         *                             Default value: 30
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(java.lang.Number recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         *                             Default value: 30
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(com.aliyun.ros.cdk.core.IResolvable recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretDataType}
         * @param secretDataType Property secretDataType: The type of the secret value.
         *                       Valid values:
         *                       text (default value)
         *                       binary
         * @return {@code this}
         */
        public Builder secretDataType(java.lang.String secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretDataType}
         * @param secretDataType Property secretDataType: The type of the secret value.
         *                       Valid values:
         *                       text (default value)
         *                       binary
         * @return {@code this}
         */
        public Builder secretDataType(com.aliyun.ros.cdk.core.IResolvable secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionStages}
         * @param versionStages Property versionStages: The stage labels that mark the secret version.
         *                      ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * @return {@code this}
         */
        public Builder versionStages(com.aliyun.ros.cdk.core.IResolvable versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionStages}
         * @param versionStages Property versionStages: The stage labels that mark the secret version.
         *                      ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * @return {@code this}
         */
        public Builder versionStages(java.util.List<? extends java.lang.Object> versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecretProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecretProps {
        private final java.lang.Object secretData;
        private final java.lang.Object secretName;
        private final java.lang.Object versionId;
        private final java.lang.Object description;
        private final java.lang.Object encryptionKeyId;
        private final java.lang.Object forceDeleteWithoutRecovery;
        private final java.lang.Object recoveryWindowInDays;
        private final java.lang.Object secretDataType;
        private final java.lang.Object versionStages;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.secretData = software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretName = software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKeyId = software.amazon.jsii.Kernel.get(this, "encryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceDeleteWithoutRecovery = software.amazon.jsii.Kernel.get(this, "forceDeleteWithoutRecovery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recoveryWindowInDays = software.amazon.jsii.Kernel.get(this, "recoveryWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretDataType = software.amazon.jsii.Kernel.get(this, "secretDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionStages = software.amazon.jsii.Kernel.get(this, "versionStages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.secretData = java.util.Objects.requireNonNull(builder.secretData, "secretData is required");
            this.secretName = java.util.Objects.requireNonNull(builder.secretName, "secretName is required");
            this.versionId = java.util.Objects.requireNonNull(builder.versionId, "versionId is required");
            this.description = builder.description;
            this.encryptionKeyId = builder.encryptionKeyId;
            this.forceDeleteWithoutRecovery = builder.forceDeleteWithoutRecovery;
            this.recoveryWindowInDays = builder.recoveryWindowInDays;
            this.secretDataType = builder.secretDataType;
            this.versionStages = builder.versionStages;
        }

        @Override
        public final java.lang.Object getSecretData() {
            return this.secretData;
        }

        @Override
        public final java.lang.Object getSecretName() {
            return this.secretName;
        }

        @Override
        public final java.lang.Object getVersionId() {
            return this.versionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEncryptionKeyId() {
            return this.encryptionKeyId;
        }

        @Override
        public final java.lang.Object getForceDeleteWithoutRecovery() {
            return this.forceDeleteWithoutRecovery;
        }

        @Override
        public final java.lang.Object getRecoveryWindowInDays() {
            return this.recoveryWindowInDays;
        }

        @Override
        public final java.lang.Object getSecretDataType() {
            return this.secretDataType;
        }

        @Override
        public final java.lang.Object getVersionStages() {
            return this.versionStages;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("secretData", om.valueToTree(this.getSecretData()));
            data.set("secretName", om.valueToTree(this.getSecretName()));
            data.set("versionId", om.valueToTree(this.getVersionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEncryptionKeyId() != null) {
                data.set("encryptionKeyId", om.valueToTree(this.getEncryptionKeyId()));
            }
            if (this.getForceDeleteWithoutRecovery() != null) {
                data.set("forceDeleteWithoutRecovery", om.valueToTree(this.getForceDeleteWithoutRecovery()));
            }
            if (this.getRecoveryWindowInDays() != null) {
                data.set("recoveryWindowInDays", om.valueToTree(this.getRecoveryWindowInDays()));
            }
            if (this.getSecretDataType() != null) {
                data.set("secretDataType", om.valueToTree(this.getSecretDataType()));
            }
            if (this.getVersionStages() != null) {
                data.set("versionStages", om.valueToTree(this.getVersionStages()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.SecretProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecretProps.Jsii$Proxy that = (SecretProps.Jsii$Proxy) o;

            if (!secretData.equals(that.secretData)) return false;
            if (!secretName.equals(that.secretName)) return false;
            if (!versionId.equals(that.versionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.encryptionKeyId != null ? !this.encryptionKeyId.equals(that.encryptionKeyId) : that.encryptionKeyId != null) return false;
            if (this.forceDeleteWithoutRecovery != null ? !this.forceDeleteWithoutRecovery.equals(that.forceDeleteWithoutRecovery) : that.forceDeleteWithoutRecovery != null) return false;
            if (this.recoveryWindowInDays != null ? !this.recoveryWindowInDays.equals(that.recoveryWindowInDays) : that.recoveryWindowInDays != null) return false;
            if (this.secretDataType != null ? !this.secretDataType.equals(that.secretDataType) : that.secretDataType != null) return false;
            return this.versionStages != null ? this.versionStages.equals(that.versionStages) : that.versionStages == null;
        }

        @Override
        public final int hashCode() {
            int result = this.secretData.hashCode();
            result = 31 * result + (this.secretName.hashCode());
            result = 31 * result + (this.versionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.encryptionKeyId != null ? this.encryptionKeyId.hashCode() : 0);
            result = 31 * result + (this.forceDeleteWithoutRecovery != null ? this.forceDeleteWithoutRecovery.hashCode() : 0);
            result = 31 * result + (this.recoveryWindowInDays != null ? this.recoveryWindowInDays.hashCode() : 0);
            result = 31 * result + (this.secretDataType != null ? this.secretDataType.hashCode() : 0);
            result = 31 * result + (this.versionStages != null ? this.versionStages.hashCode() : 0);
            return result;
        }
    }
}
