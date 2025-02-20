import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sSlbBinding } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosK8sSlbBinding as K8sSlbBindingProperty };

/**
 * Properties for defining a `ALIYUN::EDAS::K8sSlbBinding`
 */
export interface K8sSlbBindingProps {

    /**
     * Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;

    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property servicePortInfos: The information about the ports.
     */
    readonly servicePortInfos: Array<RosK8sSlbBinding.ServicePortInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property type: The type of the SLB instance. Valid values: internet and intranet.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;

    /**
     * Property scheduler: The scheduling algorithm. Valid values: 
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * rr: Requests are distributed to backend servers in sequence.
     * Default value: rr
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * Property specification: The specification of the load balancer instance.
     */
    readonly specification?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sSlbBinding`
 */
export class K8sSlbBinding extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Address: The address of load balancer instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The ID of load balancer instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sSlbBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosK8sSlbBinding = new RosK8sSlbBinding(this, id,  {
            type: props.type,
            appId: props.appId,
            clusterId: props.clusterId,
            scheduler: props.scheduler,
            specification: props.specification,
            loadBalancerId: props.loadBalancerId,
            servicePortInfos: props.servicePortInfos,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sSlbBinding;
        this.attrAddress = rosK8sSlbBinding.attrAddress;
        this.attrAppId = rosK8sSlbBinding.attrAppId;
        this.attrChangeOrderId = rosK8sSlbBinding.attrChangeOrderId;
        this.attrLoadBalancerId = rosK8sSlbBinding.attrLoadBalancerId;
        this.attrLoadBalancerName = rosK8sSlbBinding.attrLoadBalancerName;
    }
}
