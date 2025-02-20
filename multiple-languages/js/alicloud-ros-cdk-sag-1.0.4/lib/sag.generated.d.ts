import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface RosACLProps {
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACL`
 */
export declare class RosACL extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACL";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AclId: Access control set ID.
     */
    readonly attrAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`
 */
export interface RosACLAssociationProps {
    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLAssociation`
 */
export declare class RosACLAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: Access control ID.
     */
    aclId: string | ros.IResolvable;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::ACLRule`
 */
export interface RosACLRuleProps {
    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    readonly destPortRange: string | ros.IResolvable;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLRule`
 */
export declare class RosACLRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AcrId: Access control rule ID.
     */
    readonly attrAcrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: Access control ID.
     */
    aclId: string | ros.IResolvable;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    destPortRange: string | ros.IResolvable;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    direction: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property policy: Access: accept|drop
     */
    policy: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface RosCloudConnectNetworkProps {
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloudConnectNetwork.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
export declare class RosCloudConnectNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::CloudConnectNetwork";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CcnId: The ID of the CCN instance.
     */
    readonly attrCcnId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property isDefault: Whether is created by system
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCloudConnectNetwork.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCloudConnectNetworkProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCloudConnectNetwork {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface RosGrantCcnToCenProps {
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string | ros.IResolvable;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string | ros.IResolvable;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::GrantCcnToCen`
 */
export declare class RosGrantCcnToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::GrantCcnToCen";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CcnInstanceId: The ID of the CCN instance.
     */
    readonly attrCcnInstanceId: ros.IResolvable;
    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    readonly attrCenInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    ccnInstanceId: string | ros.IResolvable;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    cenInstanceId: string | ros.IResolvable;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    cenUid: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantCcnToCenProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SerialNumberBinding`
 */
export interface RosSerialNumberBindingProps {
    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    readonly serialNumber: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SerialNumberBinding`
 */
export declare class RosSerialNumberBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SerialNumberBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    serialNumber: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::SerialNumberBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSerialNumberBindingProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGateway`
 */
export interface RosSmartAccessGatewayProps {
    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    readonly buyerMessage: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG instance.
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    readonly hardWareSpec: string | ros.IResolvable;
    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    readonly haType: string | ros.IResolvable;
    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
     */
    readonly maxBandWidth: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    readonly receiverAddress: string | ros.IResolvable;
    /**
     * @Property receiverCity: The city of the recipient address.
     */
    readonly receiverCity: string | ros.IResolvable;
    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    readonly receiverCountry: string | ros.IResolvable;
    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    readonly receiverDistrict: string | ros.IResolvable;
    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    readonly receiverEmail: string | ros.IResolvable;
    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    readonly receiverMobile: string | ros.IResolvable;
    /**
     * @Property receiverName: The name of the recipient.
     */
    readonly receiverName: string | ros.IResolvable;
    /**
     * @Property receiverState: The province of the recipient address.
     */
    readonly receiverState: string | ros.IResolvable;
    /**
     * @Property receiverTown: The town of the recipient address.
     */
    readonly receiverTown: string | ros.IResolvable;
    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    readonly receiverZip: string | ros.IResolvable;
    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    readonly activate?: boolean | ros.IResolvable;
    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    readonly alreadyHaveSag?: boolean | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    readonly cidrBlock?: string | ros.IResolvable;
    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    readonly receiverPhone?: string | ros.IResolvable;
    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    readonly routingStrategy?: string | ros.IResolvable;
    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    readonly securityLockThreshold?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGateway`
 */
export declare class RosSmartAccessGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    buyerMessage: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG instance.
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    hardWareSpec: string | ros.IResolvable;
    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    haType: string | ros.IResolvable;
    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
     */
    maxBandWidth: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    receiverAddress: string | ros.IResolvable;
    /**
     * @Property receiverCity: The city of the recipient address.
     */
    receiverCity: string | ros.IResolvable;
    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    receiverCountry: string | ros.IResolvable;
    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    receiverDistrict: string | ros.IResolvable;
    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    receiverEmail: string | ros.IResolvable;
    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    receiverMobile: string | ros.IResolvable;
    /**
     * @Property receiverName: The name of the recipient.
     */
    receiverName: string | ros.IResolvable;
    /**
     * @Property receiverState: The province of the recipient address.
     */
    receiverState: string | ros.IResolvable;
    /**
     * @Property receiverTown: The town of the recipient address.
     */
    receiverTown: string | ros.IResolvable;
    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    receiverZip: string | ros.IResolvable;
    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    activate: boolean | ros.IResolvable | undefined;
    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    alreadyHaveSag: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    cidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    receiverPhone: string | ros.IResolvable | undefined;
    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    routingStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    securityLockThreshold: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export interface RosSmartAccessGatewayBindingProps {
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export declare class RosSmartAccessGatewayBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGatewayBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    ccnId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
