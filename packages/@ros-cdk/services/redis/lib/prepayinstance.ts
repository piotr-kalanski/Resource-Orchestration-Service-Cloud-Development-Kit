import * as ros from '@ros-cdk/core';
import { RosPrepayInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayInstance as PrepayInstanceProperty };

/**
 * Properties for defining a `ALIYUN::REDIS::PrepayInstance`
 */
export interface PrepayInstanceProps {

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0. Default value: 2.8.
     */
    readonly engineVersion?: string;

    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string;

    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
     */
    readonly period?: number;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::REDIS::PrepayInstance`
 */
export class PrepayInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: any;

    /**
     * @Attribute InstanceId: Instance id for created redis instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: any;

    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrepayInstance = new RosPrepayInstance(this, id,  {
            instanceName: props.instanceName,
            engineVersion: props.engineVersion ? props.engineVersion : '2.8',
            vpcId: props.vpcId,
            evictionPolicy: props.evictionPolicy,
            zoneId: props.zoneId,
            capacity: props.capacity,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrConnectionDomain = rosPrepayInstance.attrConnectionDomain;
        this.attrInstanceId = rosPrepayInstance.attrInstanceId;
        this.attrOrderId = rosPrepayInstance.attrOrderId;
        this.attrPort = rosPrepayInstance.attrPort;
    }
}
