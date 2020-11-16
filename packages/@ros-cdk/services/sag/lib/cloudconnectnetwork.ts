import * as ros from '@ros-cdk/core';
import { RosCloudConnectNetwork } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCloudConnectNetwork as CloudConnectNetworkProperty };

/**
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface CloudConnectNetworkProps {

    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
export class CloudConnectNetwork extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CcnId: The ID of the CCN instance.
     */
    public readonly attrCcnId: any;

    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CloudConnectNetworkProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCloudConnectNetwork = new RosCloudConnectNetwork(this, id,  {
            isDefault: props.isDefault ? props.isDefault : false,
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCloudConnectNetwork;
        this.attrCcnId = rosCloudConnectNetwork.attrCcnId;
    }
}
