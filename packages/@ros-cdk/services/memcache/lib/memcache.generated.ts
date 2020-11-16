// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::Memcache::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    readonly autoRenewPeriod?: string;

    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoUseCoupon?: string;

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly capacity?: number;

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    readonly chargeType?: string;

    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    readonly config?: string;

    /**
     * @Property couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;

    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly instanceClass?: string;

    /**
     * @Property instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
     */
    readonly instanceName?: string;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    readonly networkType?: string;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly password?: string;

    /**
     * @Property period: The subscription period. You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    readonly period?: string;

    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateString)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('couponNo', ros.validateString)(properties.couponNo));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('backupPolicy', RosInstance_BackupPolicyPropertyValidator)(properties.backupPolicy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.stringToRosTemplate(properties.autoRenewPeriod),
      AutoUseCoupon: ros.stringToRosTemplate(properties.autoUseCoupon),
      BackupPolicy: rosInstanceBackupPolicyPropertyToRosTemplate(properties.backupPolicy),
      Capacity: ros.numberToRosTemplate(properties.capacity),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Config: ros.stringToRosTemplate(properties.config),
      CouponNo: ros.stringToRosTemplate(properties.couponNo),
      InstanceClass: ros.stringToRosTemplate(properties.instanceClass),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.stringToRosTemplate(properties.period),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VpcPasswordFree: ros.booleanToRosTemplate(properties.vpcPasswordFree),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::Memcache::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    public readonly attrConnectionDomain: any;

    /**
     * @Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: any;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: any;

    /**
     * @Attribute QPS: QPS.
     */
    public readonly attrQps: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    public autoRenewPeriod: string | undefined;

    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    public autoUseCoupon: string | undefined;

    /**
     * @Property backupPolicy: Backup policy
     */
    public backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    public capacity: number | undefined;

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    public chargeType: string | undefined;

    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    public config: string | undefined;

    /**
     * @Property couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
     */
    public couponNo: string | undefined;

    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    public instanceClass: string | undefined;

    /**
     * @Property instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
     */
    public instanceName: string | undefined;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    public networkType: string | undefined;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    public password: string | undefined;

    /**
     * @Property period: The subscription period. You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    public period: string | undefined;

    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::Memcache::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionDomain = ros.Token.asString(this.getAtt('ConnectionDomain'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrInstanceName = ros.Token.asString(this.getAtt('InstanceName'));
        this.attrPort = ros.Token.asString(this.getAtt('Port'));
        this.attrQps = ros.Token.asString(this.getAtt('QPS'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.autoUseCoupon = props.autoUseCoupon;
        this.backupPolicy = props.backupPolicy;
        this.capacity = props.capacity;
        this.chargeType = props.chargeType;
        this.config = props.config;
        this.couponNo = props.couponNo;
        this.instanceClass = props.instanceClass;
        this.instanceName = props.instanceName;
        this.networkType = props.networkType;
        this.password = props.password;
        this.period = props.period;
        this.privateIpAddress = props.privateIpAddress;
        this.resourceGroupId = props.resourceGroupId;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            autoUseCoupon: this.autoUseCoupon,
            backupPolicy: this.backupPolicy,
            capacity: this.capacity,
            chargeType: this.chargeType,
            config: this.config,
            couponNo: this.couponNo,
            instanceClass: this.instanceClass,
            instanceName: this.instanceName,
            networkType: this.networkType,
            password: this.password,
            period: this.period,
            privateIpAddress: this.privateIpAddress,
            resourceGroupId: this.resourceGroupId,
            vpcId: this.vpcId,
            vpcPasswordFree: this.vpcPasswordFree,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Only for PostPaid instance. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
         */
        readonly preferredBackupPeriod: string;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number;
    }
}
/**
 * Determine whether the given properties match those of a `BackupPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_BackupPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.requiredValidator)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.validateString)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.requiredValidator)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateNumber)(properties.enableBackupLog));
    return errors.wrap('supplied properties not correct for "BackupPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Instance.BackupPolicy` resource
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Instance.BackupPolicy` resource.
 */
// @ts-ignore TS6133
function rosInstanceBackupPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_BackupPolicyPropertyValidator(properties).assertSuccess();
    return {
      PreferredBackupPeriod: ros.stringToRosTemplate(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      EnableBackupLog: ros.numberToRosTemplate(properties.enableBackupLog),
    };
}

/**
 * Properties for defining a `ALIYUN::Memcache::Whitelist`
 */
export interface RosWhitelistProps {

    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string;

    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string;

    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string;

    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string;
}

/**
 * Determine whether the given properties match those of a `RosWhitelistProps`
 *
 * @param properties - the TypeScript properties of a `RosWhitelistProps`
 *
 * @returns the result of the validation.
 */
function RosWhitelistPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityIpGroupAttribute', ros.validateString)(properties.securityIpGroupAttribute));
    errors.collect(ros.propertyValidator('securityIps', ros.requiredValidator)(properties.securityIps));
    errors.collect(ros.propertyValidator('securityIps', ros.validateString)(properties.securityIps));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.securityIpGroupName && (typeof properties.securityIpGroupName) !== 'object') {
        errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateAllowedPattern)({
          data: properties.securityIpGroupName,
          reg: /[a-z][a-zA-Z0-9_]*[a-zA-Z0-9]/
        }));
    }
    if(properties.securityIpGroupName && (Array.isArray(properties.securityIpGroupName) || (typeof properties.securityIpGroupName) === 'string')) {
        errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateLength)({
            data: properties.securityIpGroupName.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateString)(properties.securityIpGroupName));
    return errors.wrap('supplied properties not correct for "RosWhitelistProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Whitelist` resource
 *
 * @param properties - the TypeScript properties of a `RosWhitelistProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Memcache::Whitelist` resource.
 */
// @ts-ignore TS6133
function rosWhitelistPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWhitelistPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      SecurityIps: ros.stringToRosTemplate(properties.securityIps),
      SecurityIpGroupAttribute: ros.stringToRosTemplate(properties.securityIpGroupAttribute),
      SecurityIpGroupName: ros.stringToRosTemplate(properties.securityIpGroupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::Memcache::Whitelist`
 */
export class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Whitelist";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    public readonly attrSecurityIpGroupAttribute: any;

    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    public readonly attrSecurityIpGroupName: any;

    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    public readonly attrSecurityIps: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    public instanceId: string;

    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    public securityIps: string;

    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    public securityIpGroupAttribute: string | undefined;

    /**
     * @Property securityIpGroupName: Whitelist group
     */
    public securityIpGroupName: string | undefined;

    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWhitelistProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWhitelist.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityIpGroupAttribute = ros.Token.asString(this.getAtt('SecurityIpGroupAttribute'));
        this.attrSecurityIpGroupName = ros.Token.asString(this.getAtt('SecurityIpGroupName'));
        this.attrSecurityIps = ros.Token.asString(this.getAtt('SecurityIps'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.securityIps = props.securityIps;
        this.securityIpGroupAttribute = props.securityIpGroupAttribute;
        this.securityIpGroupName = props.securityIpGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            securityIps: this.securityIps,
            securityIpGroupAttribute: this.securityIpGroupAttribute,
            securityIpGroupName: this.securityIpGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWhitelistPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
