package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.230Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterProps")
@software.amazon.jsii.Jsii.Proxy(DBClusterProps.Jsii$Proxy.class)
public interface DBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbNodeClass: The node specifications of the cluster.
     * <p>
     * For more information, see Specifications and pricing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeClass();

    /**
     * Property dbType: Database type, value: MySQL PostgreSQL Oracle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbType();

    /**
     * Property dbVersion: The version of the database.
     * <p>
     * Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11
     * Oracle: 11
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     * Property payType: The billing method of the cluster.
     * <p>
     * Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property autoRenewPeriod: Set the cluster auto renewal time.
     * <p>
     * Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
     * <p>
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
        return null;
    }

    /**
     * Property cloneDataPoint: The time point of data to be cloned.
     * <p>
     * Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloneDataPoint() {
        return null;
    }

    /**
     * Property clusterNetworkType: The network type of the cluster.
     * <p>
     * Currently, only VPC is supported. Default value: VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterNetworkType() {
        return null;
    }

    /**
     * Property creationCategory: Cluster series.
     * <p>
     * The value could be Normal (standard version).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreationCategory() {
        return null;
    }

    /**
     * Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
     * <p>
     * Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreationOption() {
        return null;
    }

    /**
     * Property dbClusterDescription: The description of the cluster.
     * <p>
     * The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     * Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterParameters() {
        return null;
    }

    /**
     * Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
     * <p>
     * This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultTimeZone() {
        return null;
    }

    /**
     * Property gdnId: The ID of the Global Database Network (GDN).
     * <p>
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGdnId() {
        return null;
    }

    /**
     * Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
     * <p>
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLowerCaseTableNames() {
        return null;
    }

    /**
     * Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
     * <p>
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return null;
    }

    /**
     * Property period: The subscription period of the cluster in month.
     * <p>
     * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
     * <p>
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupIds: The ID of the security group.
     * <p>
     * You can add up to three security groups to a cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * <p>
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceResourceId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
     * <p>
     * Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC to connect to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch to connect to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the cluster.
     * <p>
     * You can call the DescribeRegions operation to query available zones.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClusterProps> {
        java.lang.Object dbNodeClass;
        java.lang.Object dbType;
        java.lang.Object dbVersion;
        java.lang.Object payType;
        java.lang.Object autoRenewPeriod;
        java.lang.Object backupRetentionPolicyOnClusterDeletion;
        java.lang.Object cloneDataPoint;
        java.lang.Object clusterNetworkType;
        java.lang.Object creationCategory;
        java.lang.Object creationOption;
        java.lang.Object dbClusterDescription;
        java.lang.Object dbClusterParameters;
        java.lang.Object defaultTimeZone;
        java.lang.Object gdnId;
        java.lang.Object lowerCaseTableNames;
        java.lang.Object maintainTime;
        java.lang.Object period;
        java.lang.Object renewalStatus;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object securityIpList;
        java.lang.Object sourceResourceId;
        java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags;
        java.lang.Object tdeStatus;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DBClusterProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The node specifications of the cluster. This parameter is required.
         *                    For more information, see Specifications and pricing.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The node specifications of the cluster. This parameter is required.
         *                    For more information, see Specifications and pricing.
         * @return {@code this}
         */
        public Builder dbNodeClass(com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbType}
         * @param dbType Property dbType: Database type, value: MySQL PostgreSQL Oracle. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbType}
         * @param dbType Property dbType: Database type, value: MySQL PostgreSQL Oracle. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version of the database. This parameter is required.
         *                  Valid values:
         *                  MySQL: 5.6, 5.7 or 8.0
         *                  PostgreSQL: 11
         *                  Oracle: 11
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version of the database. This parameter is required.
         *                  Valid values:
         *                  MySQL: 5.6, 5.7 or 8.0
         *                  PostgreSQL: 11
         *                  Oracle: 11
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPayType}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         *                Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPayType}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         *                Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Set the cluster auto renewal time.
         *                        Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Set the cluster auto renewal time.
         *                        Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getBackupRetentionPolicyOnClusterDeletion}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
         *                                               LATEST: Permanently keep the last backup (automatic backup before deletion).
         *                                               NONE: The backup set is not retained when the cluster is deleted.
         *                                               When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
         *                                               Note: This parameter takes effect only when the value of DBType is MySQL.
         * @return {@code this}
         */
        public Builder backupRetentionPolicyOnClusterDeletion(java.lang.String backupRetentionPolicyOnClusterDeletion) {
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getBackupRetentionPolicyOnClusterDeletion}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
         *                                               LATEST: Permanently keep the last backup (automatic backup before deletion).
         *                                               NONE: The backup set is not retained when the cluster is deleted.
         *                                               When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
         *                                               Note: This parameter takes effect only when the value of DBType is MySQL.
         * @return {@code this}
         */
        public Builder backupRetentionPolicyOnClusterDeletion(com.aliyun.ros.cdk.core.IResolvable backupRetentionPolicyOnClusterDeletion) {
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCloneDataPoint}
         * @param cloneDataPoint Property cloneDataPoint: The time point of data to be cloned.
         *                       Valid values:
         *                       LATEST: clones data of the latest time point.
         *                       <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
         *                       <Timestamp>: clones data of a historical time point. Specify the specific time in
         *                       the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
         *                       Default value: LATEST.
         *                       Note
         *                       This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
         *                       If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
         * @return {@code this}
         */
        public Builder cloneDataPoint(java.lang.String cloneDataPoint) {
            this.cloneDataPoint = cloneDataPoint;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCloneDataPoint}
         * @param cloneDataPoint Property cloneDataPoint: The time point of data to be cloned.
         *                       Valid values:
         *                       LATEST: clones data of the latest time point.
         *                       <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
         *                       <Timestamp>: clones data of a historical time point. Specify the specific time in
         *                       the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
         *                       Default value: LATEST.
         *                       Note
         *                       This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
         *                       If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
         * @return {@code this}
         */
        public Builder cloneDataPoint(com.aliyun.ros.cdk.core.IResolvable cloneDataPoint) {
            this.cloneDataPoint = cloneDataPoint;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getClusterNetworkType}
         * @param clusterNetworkType Property clusterNetworkType: The network type of the cluster.
         *                           Currently, only VPC is supported. Default value: VPC.
         * @return {@code this}
         */
        public Builder clusterNetworkType(java.lang.String clusterNetworkType) {
            this.clusterNetworkType = clusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getClusterNetworkType}
         * @param clusterNetworkType Property clusterNetworkType: The network type of the cluster.
         *                           Currently, only VPC is supported. Default value: VPC.
         * @return {@code this}
         */
        public Builder clusterNetworkType(com.aliyun.ros.cdk.core.IResolvable clusterNetworkType) {
            this.clusterNetworkType = clusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationCategory}
         * @param creationCategory Property creationCategory: Cluster series.
         *                         The value could be Normal (standard version).
         * @return {@code this}
         */
        public Builder creationCategory(java.lang.String creationCategory) {
            this.creationCategory = creationCategory;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationCategory}
         * @param creationCategory Property creationCategory: Cluster series.
         *                         The value could be Normal (standard version).
         * @return {@code this}
         */
        public Builder creationCategory(com.aliyun.ros.cdk.core.IResolvable creationCategory) {
            this.creationCategory = creationCategory;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationOption}
         * @param creationOption Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
         *                       Valid values:
         *                       Normal: creates an ApsaraDB for POLARDB cluster.
         *                       CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
         *                       CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
         *                       for POLARDB cluster.
         *                       MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
         *                       CreateGdnStandby: Create a secondary cluster.
         *                       Default value: Normal.
         *                       Note:
         *                       When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
         *                       When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
         * @return {@code this}
         */
        public Builder creationOption(java.lang.String creationOption) {
            this.creationOption = creationOption;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationOption}
         * @param creationOption Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
         *                       Valid values:
         *                       Normal: creates an ApsaraDB for POLARDB cluster.
         *                       CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
         *                       CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
         *                       for POLARDB cluster.
         *                       MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
         *                       CreateGdnStandby: Create a secondary cluster.
         *                       Default value: Normal.
         *                       Note:
         *                       When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
         *                       When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
         * @return {@code this}
         */
        public Builder creationOption(com.aliyun.ros.cdk.core.IResolvable creationOption) {
            this.creationOption = creationOption;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster.
         *                             The description must comply with the following rules:
         *                             It must start with a Chinese character or an English letter.
         *                             It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
         *                             It cannot start with http:// or https://.
         *                             It must be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster.
         *                             The description must comply with the following rules:
         *                             It must start with a Chinese character or an English letter.
         *                             It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
         *                             It cannot start with http:// or https://.
         *                             It must be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder dbClusterDescription(com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterParameters}
         * @param dbClusterParameters Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
         * @return {@code this}
         */
        public Builder dbClusterParameters(com.aliyun.ros.cdk.core.IResolvable dbClusterParameters) {
            this.dbClusterParameters = dbClusterParameters;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterParameters}
         * @param dbClusterParameters Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
         * @return {@code this}
         */
        public Builder dbClusterParameters(com.aliyun.ros.cdk.polardb.RosDBCluster.DBClusterParametersProperty dbClusterParameters) {
            this.dbClusterParameters = dbClusterParameters;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDefaultTimeZone}
         * @param defaultTimeZone Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
         *                        This is default value.
         *                        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
         *                        Note: This parameter takes effect only when DBType is MySQL.
         * @return {@code this}
         */
        public Builder defaultTimeZone(java.lang.String defaultTimeZone) {
            this.defaultTimeZone = defaultTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDefaultTimeZone}
         * @param defaultTimeZone Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
         *                        This is default value.
         *                        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
         *                        Note: This parameter takes effect only when DBType is MySQL.
         * @return {@code this}
         */
        public Builder defaultTimeZone(com.aliyun.ros.cdk.core.IResolvable defaultTimeZone) {
            this.defaultTimeZone = defaultTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getGdnId}
         * @param gdnId Property gdnId: The ID of the Global Database Network (GDN).
         *              Note: This parameter is required when the CreationOption is CreateGdnStandby.
         * @return {@code this}
         */
        public Builder gdnId(java.lang.String gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getGdnId}
         * @param gdnId Property gdnId: The ID of the Global Database Network (GDN).
         *              Note: This parameter is required when the CreationOption is CreateGdnStandby.
         * @return {@code this}
         */
        public Builder gdnId(com.aliyun.ros.cdk.core.IResolvable gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getLowerCaseTableNames}
         * @param lowerCaseTableNames Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
         *                            Note: This parameter takes effect only when the value of DBType is MySQL.
         * @return {@code this}
         */
        public Builder lowerCaseTableNames(java.lang.Number lowerCaseTableNames) {
            this.lowerCaseTableNames = lowerCaseTableNames;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getLowerCaseTableNames}
         * @param lowerCaseTableNames Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
         *                            Note: This parameter takes effect only when the value of DBType is MySQL.
         * @return {@code this}
         */
        public Builder lowerCaseTableNames(com.aliyun.ros.cdk.core.IResolvable lowerCaseTableNames) {
            this.lowerCaseTableNames = lowerCaseTableNames;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
         *                     Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
         *                     Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriod}
         * @param period Property period: The subscription period of the cluster in month.
         *               Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriod}
         * @param period Property period: The subscription period of the cluster in month.
         *               Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
         *                      Normal: manually renews the cluster.
         *                      NotRenewal: does not renew the cluster.
         *                      Default value: Normal.
         *                      Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
         *                      but only sends an SMS message three days before the cluster expires to remind you
         *                      that the cluster is not renewed.
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
         *                      Normal: manually renews the cluster.
         *                      NotRenewal: does not renew the cluster.
         *                      Default value: Normal.
         *                      Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
         *                      but only sends an SMS message three days before the cluster expires to remind you
         *                      that the cluster is not renewed.
         * @return {@code this}
         */
        public Builder renewalStatus(com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The ID of the security group.
         *                         You can add up to three security groups to a cluster.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The ID of the security group.
         *                         You can add up to three security groups to a cluster.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The whitelist of the Apsara PolarDB cluster.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The whitelist of the Apsara PolarDB cluster.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSourceResourceId}
         * @param sourceResourceId Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
         *                         Note
         *                         This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
         *                         This parameter is required if the CreationOption parameter is not set to Normal.
         * @return {@code this}
         */
        public Builder sourceResourceId(java.lang.String sourceResourceId) {
            this.sourceResourceId = sourceResourceId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSourceResourceId}
         * @param sourceResourceId Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
         *                         Note
         *                         This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
         *                         This parameter is required if the CreationOption parameter is not set to Normal.
         * @return {@code this}
         */
        public Builder sourceResourceId(com.aliyun.ros.cdk.core.IResolvable sourceResourceId) {
            this.sourceResourceId = sourceResourceId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(java.lang.Boolean tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to connect to.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to connect to.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to connect to.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to connect to.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the cluster.
         *               You can call the DescribeRegions operation to query available zones.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the cluster.
         *               You can call the DescribeRegions operation to query available zones.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClusterProps {
        private final java.lang.Object dbNodeClass;
        private final java.lang.Object dbType;
        private final java.lang.Object dbVersion;
        private final java.lang.Object payType;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object backupRetentionPolicyOnClusterDeletion;
        private final java.lang.Object cloneDataPoint;
        private final java.lang.Object clusterNetworkType;
        private final java.lang.Object creationCategory;
        private final java.lang.Object creationOption;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object dbClusterParameters;
        private final java.lang.Object defaultTimeZone;
        private final java.lang.Object gdnId;
        private final java.lang.Object lowerCaseTableNames;
        private final java.lang.Object maintainTime;
        private final java.lang.Object period;
        private final java.lang.Object renewalStatus;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object securityIpList;
        private final java.lang.Object sourceResourceId;
        private final java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags;
        private final java.lang.Object tdeStatus;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPolicyOnClusterDeletion = software.amazon.jsii.Kernel.get(this, "backupRetentionPolicyOnClusterDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloneDataPoint = software.amazon.jsii.Kernel.get(this, "cloneDataPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterNetworkType = software.amazon.jsii.Kernel.get(this, "clusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creationCategory = software.amazon.jsii.Kernel.get(this, "creationCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creationOption = software.amazon.jsii.Kernel.get(this, "creationOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterParameters = software.amazon.jsii.Kernel.get(this, "dbClusterParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultTimeZone = software.amazon.jsii.Kernel.get(this, "defaultTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gdnId = software.amazon.jsii.Kernel.get(this, "gdnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lowerCaseTableNames = software.amazon.jsii.Kernel.get(this, "lowerCaseTableNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceResourceId = software.amazon.jsii.Kernel.get(this, "sourceResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty.class)));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbNodeClass = java.util.Objects.requireNonNull(builder.dbNodeClass, "dbNodeClass is required");
            this.dbType = java.util.Objects.requireNonNull(builder.dbType, "dbType is required");
            this.dbVersion = java.util.Objects.requireNonNull(builder.dbVersion, "dbVersion is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.backupRetentionPolicyOnClusterDeletion = builder.backupRetentionPolicyOnClusterDeletion;
            this.cloneDataPoint = builder.cloneDataPoint;
            this.clusterNetworkType = builder.clusterNetworkType;
            this.creationCategory = builder.creationCategory;
            this.creationOption = builder.creationOption;
            this.dbClusterDescription = builder.dbClusterDescription;
            this.dbClusterParameters = builder.dbClusterParameters;
            this.defaultTimeZone = builder.defaultTimeZone;
            this.gdnId = builder.gdnId;
            this.lowerCaseTableNames = builder.lowerCaseTableNames;
            this.maintainTime = builder.maintainTime;
            this.period = builder.period;
            this.renewalStatus = builder.renewalStatus;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.securityIpList = builder.securityIpList;
            this.sourceResourceId = builder.sourceResourceId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty>)builder.tags;
            this.tdeStatus = builder.tdeStatus;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
            return this.backupRetentionPolicyOnClusterDeletion;
        }

        @Override
        public final java.lang.Object getCloneDataPoint() {
            return this.cloneDataPoint;
        }

        @Override
        public final java.lang.Object getClusterNetworkType() {
            return this.clusterNetworkType;
        }

        @Override
        public final java.lang.Object getCreationCategory() {
            return this.creationCategory;
        }

        @Override
        public final java.lang.Object getCreationOption() {
            return this.creationOption;
        }

        @Override
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getDbClusterParameters() {
            return this.dbClusterParameters;
        }

        @Override
        public final java.lang.Object getDefaultTimeZone() {
            return this.defaultTimeZone;
        }

        @Override
        public final java.lang.Object getGdnId() {
            return this.gdnId;
        }

        @Override
        public final java.lang.Object getLowerCaseTableNames() {
            return this.lowerCaseTableNames;
        }

        @Override
        public final java.lang.Object getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getSourceResourceId() {
            return this.sourceResourceId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTdeStatus() {
            return this.tdeStatus;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            data.set("dbType", om.valueToTree(this.getDbType()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getBackupRetentionPolicyOnClusterDeletion() != null) {
                data.set("backupRetentionPolicyOnClusterDeletion", om.valueToTree(this.getBackupRetentionPolicyOnClusterDeletion()));
            }
            if (this.getCloneDataPoint() != null) {
                data.set("cloneDataPoint", om.valueToTree(this.getCloneDataPoint()));
            }
            if (this.getClusterNetworkType() != null) {
                data.set("clusterNetworkType", om.valueToTree(this.getClusterNetworkType()));
            }
            if (this.getCreationCategory() != null) {
                data.set("creationCategory", om.valueToTree(this.getCreationCategory()));
            }
            if (this.getCreationOption() != null) {
                data.set("creationOption", om.valueToTree(this.getCreationOption()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getDbClusterParameters() != null) {
                data.set("dbClusterParameters", om.valueToTree(this.getDbClusterParameters()));
            }
            if (this.getDefaultTimeZone() != null) {
                data.set("defaultTimeZone", om.valueToTree(this.getDefaultTimeZone()));
            }
            if (this.getGdnId() != null) {
                data.set("gdnId", om.valueToTree(this.getGdnId()));
            }
            if (this.getLowerCaseTableNames() != null) {
                data.set("lowerCaseTableNames", om.valueToTree(this.getLowerCaseTableNames()));
            }
            if (this.getMaintainTime() != null) {
                data.set("maintainTime", om.valueToTree(this.getMaintainTime()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSourceResourceId() != null) {
                data.set("sourceResourceId", om.valueToTree(this.getSourceResourceId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBClusterProps.Jsii$Proxy that = (DBClusterProps.Jsii$Proxy) o;

            if (!dbNodeClass.equals(that.dbNodeClass)) return false;
            if (!dbType.equals(that.dbType)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (!payType.equals(that.payType)) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.backupRetentionPolicyOnClusterDeletion != null ? !this.backupRetentionPolicyOnClusterDeletion.equals(that.backupRetentionPolicyOnClusterDeletion) : that.backupRetentionPolicyOnClusterDeletion != null) return false;
            if (this.cloneDataPoint != null ? !this.cloneDataPoint.equals(that.cloneDataPoint) : that.cloneDataPoint != null) return false;
            if (this.clusterNetworkType != null ? !this.clusterNetworkType.equals(that.clusterNetworkType) : that.clusterNetworkType != null) return false;
            if (this.creationCategory != null ? !this.creationCategory.equals(that.creationCategory) : that.creationCategory != null) return false;
            if (this.creationOption != null ? !this.creationOption.equals(that.creationOption) : that.creationOption != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.dbClusterParameters != null ? !this.dbClusterParameters.equals(that.dbClusterParameters) : that.dbClusterParameters != null) return false;
            if (this.defaultTimeZone != null ? !this.defaultTimeZone.equals(that.defaultTimeZone) : that.defaultTimeZone != null) return false;
            if (this.gdnId != null ? !this.gdnId.equals(that.gdnId) : that.gdnId != null) return false;
            if (this.lowerCaseTableNames != null ? !this.lowerCaseTableNames.equals(that.lowerCaseTableNames) : that.lowerCaseTableNames != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.sourceResourceId != null ? !this.sourceResourceId.equals(that.sourceResourceId) : that.sourceResourceId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbNodeClass.hashCode();
            result = 31 * result + (this.dbType.hashCode());
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPolicyOnClusterDeletion != null ? this.backupRetentionPolicyOnClusterDeletion.hashCode() : 0);
            result = 31 * result + (this.cloneDataPoint != null ? this.cloneDataPoint.hashCode() : 0);
            result = 31 * result + (this.clusterNetworkType != null ? this.clusterNetworkType.hashCode() : 0);
            result = 31 * result + (this.creationCategory != null ? this.creationCategory.hashCode() : 0);
            result = 31 * result + (this.creationOption != null ? this.creationOption.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.dbClusterParameters != null ? this.dbClusterParameters.hashCode() : 0);
            result = 31 * result + (this.defaultTimeZone != null ? this.defaultTimeZone.hashCode() : 0);
            result = 31 * result + (this.gdnId != null ? this.gdnId.hashCode() : 0);
            result = 31 * result + (this.lowerCaseTableNames != null ? this.lowerCaseTableNames.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.sourceResourceId != null ? this.sourceResourceId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
