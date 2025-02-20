import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::GPDB::DBInstance`
 */
export interface RosDBInstanceProps {
    /**
     * @Property dbInstanceClass: The instance type.
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     */
    readonly dbInstanceGroupCount: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::GPDB::DBInstance`
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::DBInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: The instance type.
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     */
    dbInstanceGroupCount: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine.
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::GPDB::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::GPDB::ElasticDBInstance`
 */
export interface RosElasticDBInstanceProps {
    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    readonly instanceSpec: string | ros.IResolvable;
    /**
     * @Property segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
     */
    readonly segNodeNum: number | ros.IResolvable;
    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    readonly segStorageType: string | ros.IResolvable;
    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize: number | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    readonly encryptionType?: string | ros.IResolvable;
    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    readonly masterNodeNum?: number | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::GPDB::ElasticDBInstance`
 */
export declare class RosElasticDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::ElasticDBInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engineVersion: The version of the database engine.
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    instanceSpec: string | ros.IResolvable;
    /**
     * @Property segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
     */
    segNodeNum: number | ros.IResolvable;
    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    segStorageType: string | ros.IResolvable;
    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    storageSize: number | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
     */
    dbInstanceCategory: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    encryptionType: string | ros.IResolvable | undefined;
    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    masterNodeNum: number | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::GPDB::ElasticDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosElasticDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::GPDB::InstancePublicConnection`
 */
export interface RosInstancePublicConnectionProps {
    /**
     * @Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property port: The port number of the instance.
     */
    readonly port: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::GPDB::InstancePublicConnection`
 */
export declare class RosInstancePublicConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::InstancePublicConnection";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionString: The connection string of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    connectionStringPrefix: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property port: The port number of the instance.
     */
    port: number | ros.IResolvable;
    /**
     * Create a new `ALIYUN::GPDB::InstancePublicConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancePublicConnectionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
