import * as ros from '@ros-cdk/core';
import { RosSignatureBinding } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSignatureBinding as SignatureBindingProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`
 */
export interface SignatureBindingProps {

    /**
     * @Property apiIds: APIs to bind with the signature.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    readonly groupId: string;

    /**
     * @Property signatureId: The id of the Signature.
     */
    readonly signatureId: string;

    /**
     * @Property stageName: Bind signature in this stage.
     */
    readonly stageName: string;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::SignatureBinding`
 */
export class SignatureBinding extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ApiGateway::SignatureBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSignatureBinding = new RosSignatureBinding(this, id,  {
            signatureId: props.signatureId,
            stageName: props.stageName,
            apiIds: props.apiIds,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSignatureBinding;
    }
}
