// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::POLARDB::Account`
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    readonly accountName: string;

    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:// or https://.
     * - It must be 2 to 256 characters in length.
     */
    readonly accountDescription?: string;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege?: string;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    readonly accountType?: string;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    readonly dbName?: string;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.accountDescription && (Array.isArray(properties.accountDescription) || (typeof properties.accountDescription) === 'string')) {
        errors.collect(ros.propertyValidator('accountDescription', ros.validateLength)({
            data: properties.accountDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["Normal","Super"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (Array.isArray(properties.accountPassword) || (typeof properties.accountPassword) === 'string')) {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateLength)({
            data: properties.accountPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      AccountDescription: ros.stringToRosTemplate(properties.accountDescription),
      AccountPrivilege: ros.stringToRosTemplate(properties.accountPrivilege),
      AccountType: ros.stringToRosTemplate(properties.accountType),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::Account`
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::Account";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    public accountName: string;

    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    public accountPassword: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    public dbClusterId: string;

    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:// or https://.
     * - It must be 2 to 256 characters in length.
     */
    public accountDescription: string | undefined;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    public accountPrivilege: string | undefined;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    public accountType: string | undefined;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    public dbName: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbClusterId = props.dbClusterId;
        this.accountDescription = props.accountDescription;
        this.accountPrivilege = props.accountPrivilege;
        this.accountType = props.accountType;
        this.dbName = props.dbName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbClusterId: this.dbClusterId,
            accountDescription: this.accountDescription,
            accountPrivilege: this.accountPrivilege,
            accountType: this.accountType,
            dbName: this.dbName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`
 */
export interface RosAccountPrivilegeProps {

    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    readonly accountName: string;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    readonly dbClusterId: string;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    readonly dbName: string;
}

/**
 * Determine whether the given properties match those of a `RosAccountPrivilegeProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPrivilegePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountPrivilege', ros.requiredValidator)(properties.accountPrivilege));
    if(properties.accountPrivilege && (Array.isArray(properties.accountPrivilege) || (typeof properties.accountPrivilege) === 'string')) {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateLength)({
            data: properties.accountPrivilege.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (Array.isArray(properties.dbName) || (typeof properties.dbName) === 'string')) {
        errors.collect(ros.propertyValidator('dbName', ros.validateLength)({
            data: properties.dbName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountPrivilegeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AccountPrivilege` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AccountPrivilege` resource.
 */
// @ts-ignore TS6133
function rosAccountPrivilegePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPrivilegePropsValidator(properties).assertSuccess();
    }
    return {
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPrivilege: ros.stringToRosTemplate(properties.accountPrivilege),
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::AccountPrivilege`
 */
export class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::AccountPrivilege";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    public accountName: string;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    public accountPrivilege: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    public dbClusterId: string;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    public dbName: string;

    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountPrivilegeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccountPrivilege.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPrivilege = props.accountPrivilege;
        this.dbClusterId = props.dbClusterId;
        this.dbName = props.dbName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPrivilege: this.accountPrivilege,
            dbClusterId: this.dbClusterId,
            dbName: this.dbName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPrivilegePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBCluster`
 */
export interface RosDBClusterProps {

    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    readonly dbNodeClass: string;

    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType: string;

    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6 or 8.0
     * PostgreSQL: 11
     * Oracle: 11
     */
    readonly dbVersion: string;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string;

    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string;

    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    readonly cloneDataPoint?: string;

    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string;

    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version).
     */
    readonly creationCategory?: string;

    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new
     * ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new
     * ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only
     * mode and has binary logs enabled by default.
     * Default value: Normal.
     * Note This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     */
    readonly creationOption?: string;

    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    readonly dbClusterDescription?: string;

    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    readonly defaultTimeZone?: string;

    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string;

    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly lowerCaseTableNames?: number;

    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    readonly maintainTime?: string;

    /**
     * @Property period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
     */
    readonly period?: number;

    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    readonly renewalStatus?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    readonly sourceResourceId?: string;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('defaultTimeZone', ros.validateString)(properties.defaultTimeZone));
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('cloneDataPoint', ros.validateString)(properties.cloneDataPoint));
    errors.collect(ros.propertyValidator('gdnId', ros.validateString)(properties.gdnId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.backupRetentionPolicyOnClusterDeletion && (typeof properties.backupRetentionPolicyOnClusterDeletion) !== 'object') {
        errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateAllowedValues)({
          data: properties.backupRetentionPolicyOnClusterDeletion,
          allowedValues: ["ALL","LATEST","NONE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateString)(properties.backupRetentionPolicyOnClusterDeletion));
    if(properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
          data: properties.renewalStatus,
          allowedValues: ["AutoRenewal","Normal","NotRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    if(properties.dbClusterDescription && (Array.isArray(properties.dbClusterDescription) || (typeof properties.dbClusterDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateLength)({
            data: properties.dbClusterDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('sourceResourceId', ros.validateString)(properties.sourceResourceId));
    errors.collect(ros.propertyValidator('dbType', ros.requiredValidator)(properties.dbType));
    if(properties.dbType && (typeof properties.dbType) !== 'object') {
        errors.collect(ros.propertyValidator('dbType', ros.validateAllowedValues)({
          data: properties.dbType,
          allowedValues: ["MySQL","Oracle","PostgreSQL"],
        }));
    }
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('creationCategory', ros.validateString)(properties.creationCategory));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.requiredValidator)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    if(properties.creationOption && (typeof properties.creationOption) !== 'object') {
        errors.collect(ros.propertyValidator('creationOption', ros.validateAllowedValues)({
          data: properties.creationOption,
          allowedValues: ["CloneFromPolarDB","CloneFromRDS","MigrationFromRDS","Normal"],
        }));
    }
    errors.collect(ros.propertyValidator('creationOption', ros.validateString)(properties.creationOption));
    errors.collect(ros.propertyValidator('dbVersion', ros.requiredValidator)(properties.dbVersion));
    if(properties.dbVersion && (typeof properties.dbVersion) !== 'object') {
        errors.collect(ros.propertyValidator('dbVersion', ros.validateAllowedValues)({
          data: properties.dbVersion,
          allowedValues: ["5.6","8.0","11"],
        }));
    }
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    if(properties.clusterNetworkType && (typeof properties.clusterNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterNetworkType', ros.validateAllowedValues)({
          data: properties.clusterNetworkType,
          allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterNetworkType', ros.validateString)(properties.clusterNetworkType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    if(properties.lowerCaseTableNames && (typeof properties.lowerCaseTableNames) !== 'object') {
        errors.collect(ros.propertyValidator('lowerCaseTableNames', ros.validateAllowedValues)({
          data: properties.lowerCaseTableNames,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('lowerCaseTableNames', ros.validateNumber)(properties.lowerCaseTableNames));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      DBNodeClass: ros.stringToRosTemplate(properties.dbNodeClass),
      DBType: ros.stringToRosTemplate(properties.dbType),
      DBVersion: ros.stringToRosTemplate(properties.dbVersion),
      PayType: ros.stringToRosTemplate(properties.payType),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      BackupRetentionPolicyOnClusterDeletion: ros.stringToRosTemplate(properties.backupRetentionPolicyOnClusterDeletion),
      CloneDataPoint: ros.stringToRosTemplate(properties.cloneDataPoint),
      ClusterNetworkType: ros.stringToRosTemplate(properties.clusterNetworkType),
      CreationCategory: ros.stringToRosTemplate(properties.creationCategory),
      CreationOption: ros.stringToRosTemplate(properties.creationOption),
      DBClusterDescription: ros.stringToRosTemplate(properties.dbClusterDescription),
      DefaultTimeZone: ros.stringToRosTemplate(properties.defaultTimeZone),
      GDNId: ros.stringToRosTemplate(properties.gdnId),
      LowerCaseTableNames: ros.numberToRosTemplate(properties.lowerCaseTableNames),
      MaintainTime: ros.stringToRosTemplate(properties.maintainTime),
      Period: ros.numberToRosTemplate(properties.period),
      RenewalStatus: ros.stringToRosTemplate(properties.renewalStatus),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SourceResourceId: ros.stringToRosTemplate(properties.sourceResourceId),
      TDEStatus: ros.booleanToRosTemplate(properties.tdeStatus),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBCluster`
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public readonly attrClusterConnectionString: any;

    /**
     * @Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public readonly attrClusterEndpointId: any;

    /**
     * @Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public readonly attrCustomConnectionStrings: any;

    /**
     * @Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public readonly attrCustomEndpointIds: any;

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public readonly attrDbClusterId: any;

    /**
     * @Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public readonly attrDbNodeIds: any;

    /**
     * @Attribute OrderId: The Order ID.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public readonly attrPrimaryConnectionString: any;

    /**
     * @Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public readonly attrPrimaryEndpointId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    public dbNodeClass: string;

    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    public dbType: string;

    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6 or 8.0
     * PostgreSQL: 11
     * Oracle: 11
     */
    public dbVersion: string;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public payType: string;

    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    public backupRetentionPolicyOnClusterDeletion: string | undefined;

    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    public cloneDataPoint: string | undefined;

    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    public clusterNetworkType: string | undefined;

    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version).
     */
    public creationCategory: string | undefined;

    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new
     * ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new
     * ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only
     * mode and has binary logs enabled by default.
     * Default value: Normal.
     * Note This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     */
    public creationOption: string | undefined;

    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    public dbClusterDescription: string | undefined;

    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    public defaultTimeZone: string | undefined;

    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    public gdnId: string | undefined;

    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    public lowerCaseTableNames: number | undefined;

    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    public maintainTime: string | undefined;

    /**
     * @Property period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
     */
    public period: number | undefined;

    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    public renewalStatus: string | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    public sourceResourceId: string | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::DBCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterConnectionString = ros.Token.asString(this.getAtt('ClusterConnectionString'));
        this.attrClusterEndpointId = ros.Token.asString(this.getAtt('ClusterEndpointId'));
        this.attrCustomConnectionStrings = ros.Token.asString(this.getAtt('CustomConnectionStrings'));
        this.attrCustomEndpointIds = ros.Token.asString(this.getAtt('CustomEndpointIds'));
        this.attrDbClusterId = ros.Token.asString(this.getAtt('DBClusterId'));
        this.attrDbNodeIds = ros.Token.asString(this.getAtt('DBNodeIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPrimaryConnectionString = ros.Token.asString(this.getAtt('PrimaryConnectionString'));
        this.attrPrimaryEndpointId = ros.Token.asString(this.getAtt('PrimaryEndpointId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbNodeClass = props.dbNodeClass;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.payType = props.payType;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.backupRetentionPolicyOnClusterDeletion = props.backupRetentionPolicyOnClusterDeletion;
        this.cloneDataPoint = props.cloneDataPoint;
        this.clusterNetworkType = props.clusterNetworkType;
        this.creationCategory = props.creationCategory;
        this.creationOption = props.creationOption;
        this.dbClusterDescription = props.dbClusterDescription;
        this.defaultTimeZone = props.defaultTimeZone;
        this.gdnId = props.gdnId;
        this.lowerCaseTableNames = props.lowerCaseTableNames;
        this.maintainTime = props.maintainTime;
        this.period = props.period;
        this.renewalStatus = props.renewalStatus;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceResourceId = props.sourceResourceId;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbNodeClass: this.dbNodeClass,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            payType: this.payType,
            autoRenewPeriod: this.autoRenewPeriod,
            backupRetentionPolicyOnClusterDeletion: this.backupRetentionPolicyOnClusterDeletion,
            cloneDataPoint: this.cloneDataPoint,
            clusterNetworkType: this.clusterNetworkType,
            creationCategory: this.creationCategory,
            creationOption: this.creationOption,
            dbClusterDescription: this.dbClusterDescription,
            defaultTimeZone: this.defaultTimeZone,
            gdnId: this.gdnId,
            lowerCaseTableNames: this.lowerCaseTableNames,
            maintainTime: this.maintainTime,
            period: this.period,
            renewalStatus: this.renewalStatus,
            resourceGroupId: this.resourceGroupId,
            sourceResourceId: this.sourceResourceId,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export interface RosDBClusterAccessWhiteListProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly dbClusterId: string;

    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
     * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    readonly securityIps: string;

    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    readonly dbClusterIpArrayName?: string;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterAccessWhiteListProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterAccessWhiteListProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterAccessWhiteListPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityIps', ros.requiredValidator)(properties.securityIps));
    errors.collect(ros.propertyValidator('securityIps', ros.validateString)(properties.securityIps));
    if(properties.dbClusterIpArrayName && (Array.isArray(properties.dbClusterIpArrayName) || (typeof properties.dbClusterIpArrayName) === 'string')) {
        errors.collect(ros.propertyValidator('dbClusterIpArrayName', ros.validateLength)({
            data: properties.dbClusterIpArrayName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbClusterIpArrayName', ros.validateString)(properties.dbClusterIpArrayName));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    return errors.wrap('supplied properties not correct for "RosDBClusterAccessWhiteListProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterAccessWhiteList` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterAccessWhiteListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterAccessWhiteList` resource.
 */
// @ts-ignore TS6133
function rosDBClusterAccessWhiteListPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterAccessWhiteListPropsValidator(properties).assertSuccess();
    }
    return {
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      SecurityIps: ros.stringToRosTemplate(properties.securityIps),
      DBClusterIPArrayName: ros.stringToRosTemplate(properties.dbClusterIpArrayName),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export class RosDBClusterAccessWhiteList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterAccessWhiteList";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public readonly attrDbClusterId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public dbClusterId: string;

    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
     * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    public securityIps: string;

    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    public dbClusterIpArrayName: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterAccessWhiteListProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterAccessWhiteList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterId = ros.Token.asString(this.getAtt('DBClusterId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.securityIps = props.securityIps;
        this.dbClusterIpArrayName = props.dbClusterIpArrayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            securityIps: this.securityIps,
            dbClusterIpArrayName: this.dbClusterIpArrayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterAccessWhiteListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterEndpoint`
 */
export interface RosDBClusterEndpointProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    readonly autoAddNewNodes?: string;

    /**
     * @Property endpointConfig:
     */
    readonly endpointConfig?: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable;

    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    readonly endpointType?: string;

    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    readonly nodes?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property readWriteMode: The read/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readonly readWriteMode?: string;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoAddNewNodes && (typeof properties.autoAddNewNodes) !== 'object') {
        errors.collect(ros.propertyValidator('autoAddNewNodes', ros.validateAllowedValues)({
          data: properties.autoAddNewNodes,
          allowedValues: ["Disable","Enable"],
        }));
    }
    errors.collect(ros.propertyValidator('autoAddNewNodes', ros.validateString)(properties.autoAddNewNodes));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    if(properties.readWriteMode && (typeof properties.readWriteMode) !== 'object') {
        errors.collect(ros.propertyValidator('readWriteMode', ros.validateAllowedValues)({
          data: properties.readWriteMode,
          allowedValues: ["ReadOnly","ReadWrite"],
        }));
    }
    errors.collect(ros.propertyValidator('readWriteMode', ros.validateString)(properties.readWriteMode));
    errors.collect(ros.propertyValidator('endpointConfig', RosDBClusterEndpoint_EndpointConfigPropertyValidator)(properties.endpointConfig));
    if(properties.nodes && (Array.isArray(properties.nodes) || (typeof properties.nodes) === 'string')) {
        errors.collect(ros.propertyValidator('nodes', ros.validateLength)({
            data: properties.nodes.length,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('nodes', ros.listValidator(ros.validateAny))(properties.nodes));
    return errors.wrap('supplied properties not correct for "RosDBClusterEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      AutoAddNewNodes: ros.stringToRosTemplate(properties.autoAddNewNodes),
      EndpointConfig: rosDBClusterEndpointEndpointConfigPropertyToRosTemplate(properties.endpointConfig),
      EndpointType: ros.stringToRosTemplate(properties.endpointType),
      Nodes: ros.listMapper(ros.objectToRosTemplate)(properties.nodes),
      ReadWriteMode: ros.stringToRosTemplate(properties.readWriteMode),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBClusterEndpoint`
 */
export class RosDBClusterEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpoint";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Addresses: The address items of the db cluster endpoint.
     */
    public readonly attrAddresses: any;

    /**
     * @Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    public readonly attrConnectionString: any;

    /**
     * @Attribute DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
     */
    public readonly attrDbEndpointId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    public dbClusterId: string;

    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    public autoAddNewNodes: string | undefined;

    /**
     * @Property endpointConfig:
     */
    public endpointConfig: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    public endpointType: string | undefined;

    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    public nodes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property readWriteMode: The read/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    public readWriteMode: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpoint`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddresses = ros.Token.asString(this.getAtt('Addresses'));
        this.attrConnectionString = ros.Token.asString(this.getAtt('ConnectionString'));
        this.attrDbEndpointId = ros.Token.asString(this.getAtt('DBEndpointId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.autoAddNewNodes = props.autoAddNewNodes;
        this.endpointConfig = props.endpointConfig;
        this.endpointType = props.endpointType;
        this.nodes = props.nodes;
        this.readWriteMode = props.readWriteMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            autoAddNewNodes: this.autoAddNewNodes,
            endpointConfig: this.endpointConfig,
            endpointType: this.endpointType,
            nodes: this.nodes,
            readWriteMode: this.readWriteMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBClusterEndpoint {
    /**
     * @stability external
     */
    export interface EndpointConfigProperty {
        /**
         * @Property consistLevel: The consistency level of the cluster connection point. Valid values:
     * 0: eventual consistency
     * 1: session consistency
     * For example, {"ConsistLevel": "0"}.
     * Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
         */
        readonly consistLevel?: string;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpoint_EndpointConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.consistLevel && (typeof properties.consistLevel) !== 'object') {
        errors.collect(ros.propertyValidator('consistLevel', ros.validateAllowedValues)({
          data: properties.consistLevel,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('consistLevel', ros.validateString)(properties.consistLevel));
    return errors.wrap('supplied properties not correct for "EndpointConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint.EndpointConfig` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint.EndpointConfig` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointEndpointConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBClusterEndpoint_EndpointConfigPropertyValidator(properties).assertSuccess();
    return {
      ConsistLevel: ros.stringToRosTemplate(properties.consistLevel),
    };
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterEndpointAddress`
 */
export interface RosDBClusterEndpointAddressProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    readonly dbEndpointId: string;

    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    readonly connectionStringPrefix?: string;

    /**
     * @Property netType: The network type of the connection string. 
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    readonly netType?: string;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterEndpointAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointAddressProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpointAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbEndpointId', ros.requiredValidator)(properties.dbEndpointId));
    errors.collect(ros.propertyValidator('dbEndpointId', ros.validateString)(properties.dbEndpointId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-z][-a-z0-9]{4,28}[a-z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedValues)({
          data: properties.netType,
          allowedValues: ["Public","Private"],
        }));
    }
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    return errors.wrap('supplied properties not correct for "RosDBClusterEndpointAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpointAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpointAddress` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterEndpointAddressPropsValidator(properties).assertSuccess();
    }
    return {
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      DBEndpointId: ros.stringToRosTemplate(properties.dbEndpointId),
      ConnectionStringPrefix: ros.stringToRosTemplate(properties.connectionStringPrefix),
      NetType: ros.stringToRosTemplate(properties.netType),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBClusterEndpointAddress`
 */
export class RosDBClusterEndpointAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpointAddress";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Address: The details of the endpoint address.
     */
    public readonly attrAddress: any;

    /**
     * @Attribute ConnectionString: The connection string of the endpoint address.
     */
    public readonly attrConnectionString: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    public dbClusterId: string;

    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    public dbEndpointId: string;

    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    public connectionStringPrefix: string | undefined;

    /**
     * @Property netType: The network type of the connection string. 
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    public netType: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpointAddress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterEndpointAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = ros.Token.asString(this.getAtt('Address'));
        this.attrConnectionString = ros.Token.asString(this.getAtt('ConnectionString'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbEndpointId = props.dbEndpointId;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.netType = props.netType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbEndpointId: this.dbEndpointId,
            connectionStringPrefix: this.connectionStringPrefix,
            netType: this.netType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterEndpointAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBInstance`
 */
export interface RosDBInstanceProps {

    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    readonly characterSetName: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    readonly dbName: string;

    /**
     * @Property accountName: The name of the database account to be used.
     */
    readonly accountName?: string;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    readonly accountPrivilege?: string;

    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    readonly dbDescription?: string;
}

/**
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    if(properties.accountPrivilege && (typeof properties.accountPrivilege) !== 'object') {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateAllowedValues)({
          data: properties.accountPrivilege,
          allowedValues: ["ReadWrite","ReadOnly","DMLOnly","DDLOnly"],
        }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    if(properties.dbDescription && (Array.isArray(properties.dbDescription) || (typeof properties.dbDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbDescription', ros.validateLength)({
            data: properties.dbDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (typeof properties.dbName) !== 'object') {
        errors.collect(ros.propertyValidator('dbName', ros.validateAllowedPattern)({
          data: properties.dbName,
          reg: /^[a-z0-9][-_a-z0-9]{0,63}(?<![-_]$)$/
        }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      CharacterSetName: ros.stringToRosTemplate(properties.characterSetName),
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      DBName: ros.stringToRosTemplate(properties.dbName),
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPrivilege: ros.stringToRosTemplate(properties.accountPrivilege),
      DBDescription: ros.stringToRosTemplate(properties.dbDescription),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBInstance`
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    public characterSetName: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    public dbClusterId: string;

    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    public dbName: string;

    /**
     * @Property accountName: The name of the database account to be used.
     */
    public accountName: string | undefined;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    public accountPrivilege: string | undefined;

    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    public dbDescription: string | undefined;

    /**
     * Create a new `ALIYUN::POLARDB::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.characterSetName = props.characterSetName;
        this.dbClusterId = props.dbClusterId;
        this.dbName = props.dbName;
        this.accountName = props.accountName;
        this.accountPrivilege = props.accountPrivilege;
        this.dbDescription = props.dbDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            characterSetName: this.characterSetName,
            dbClusterId: this.dbClusterId,
            dbName: this.dbName,
            accountName: this.accountName,
            accountPrivilege: this.accountPrivilege,
            dbDescription: this.dbDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::POLARDB::DBNodes`
 */
export interface RosDBNodesProps {

    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string;
}

/**
 * Determine whether the given properties match those of a `RosDBNodesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBNodesProps`
 *
 * @returns the result of the validation.
 */
function RosDBNodesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('amount', ros.requiredValidator)(properties.amount));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    return errors.wrap('supplied properties not correct for "RosDBNodesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBNodes` resource
 *
 * @param properties - the TypeScript properties of a `RosDBNodesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBNodes` resource.
 */
// @ts-ignore TS6133
function rosDBNodesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBNodesPropsValidator(properties).assertSuccess();
    }
    return {
      Amount: ros.numberToRosTemplate(properties.amount),
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
    };
}

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBNodes`
 */
export class RosDBNodes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBNodes";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public readonly attrDbNodeIds: any;

    /**
     * @Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public readonly attrOrderIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    public amount: number;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    public dbClusterId: string;

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBNodesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBNodes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNodeIds = ros.Token.asString(this.getAtt('DBNodeIds'));
        this.attrOrderIds = ros.Token.asString(this.getAtt('OrderIds'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.amount = props.amount;
        this.dbClusterId = props.dbClusterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            amount: this.amount,
            dbClusterId: this.dbClusterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBNodesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
