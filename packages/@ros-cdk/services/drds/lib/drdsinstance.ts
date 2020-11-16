import * as ros from '@ros-cdk/core';
import { RosDrdsInstance } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsInstance as DrdsInstanceProperty };

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`
 */
export interface DrdsInstanceProps {

    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string;

    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string;

    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string;

    /**
     * @Property quantity: Purchase quantity
     */
    readonly quantity: number;

    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string;

    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    readonly type: string;

    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    readonly zoneId: string;

    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number;

    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    readonly pricingCycle?: string;

    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string;

    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsInstance`
 */
export class DrdsInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute DrdsInstanceId: instance id
     */
    public readonly attrDrdsInstanceId: any;

    /**
     * @Attribute OrderId: order number
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDrdsInstance = new RosDrdsInstance(this, id,  {
            type: props.type,
            description: props.description,
            vpcId: props.vpcId,
            zoneId: props.zoneId,
            pricingCycle: props.pricingCycle,
            instanceSeries: props.instanceSeries,
            quantity: props.quantity,
            specification: props.specification,
            duration: props.duration,
            isAutoRenew: props.isAutoRenew,
            payType: props.payType,
            vswitchId: props.vswitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsInstance;
        this.attrDrdsInstanceId = rosDrdsInstance.attrDrdsInstanceId;
        this.attrOrderId = rosDrdsInstance.attrOrderId;
    }
}
