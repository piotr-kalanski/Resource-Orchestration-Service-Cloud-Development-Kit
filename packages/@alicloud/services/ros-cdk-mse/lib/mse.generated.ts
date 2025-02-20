// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    readonly netType: string | ros.IResolvable;

    /**
     * @Property aclEntryList: acl entry list
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterAliasName: cluster alias name
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * @Property connectionType: network connect type
     */
    readonly connectionType?: string | ros.IResolvable;

    /**
     * @Property diskCapacity: disk capacity, unit: G
     */
    readonly diskCapacity?: number | ros.IResolvable;

    /**
     * @Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * @Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;

    /**
     * @Property pubNetworkFlow: pub network flow
     */
    readonly pubNetworkFlow?: string | ros.IResolvable;

    /**
     * @Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string | ros.IResolvable;

    /**
     * @Property requestPars:
     */
    readonly requestPars?: string | ros.IResolvable;

    /**
     * @Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateSlbSpecification', ros.validateString)(properties.privateSlbSpecification));
    errors.collect(ros.propertyValidator('clusterVersion', ros.requiredValidator)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('clusterVersion', ros.validateString)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('connectionType', ros.validateString)(properties.connectionType));
    errors.collect(ros.propertyValidator('aclEntryList', ros.listValidator(ros.validateString))(properties.aclEntryList));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.requiredValidator)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.validateString)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('pubSlbSpecification', ros.validateString)(properties.pubSlbSpecification));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('clusterAliasName', ros.validateString)(properties.clusterAliasName));
    errors.collect(ros.propertyValidator('instanceCount', ros.requiredValidator)(properties.instanceCount));
    errors.collect(ros.propertyValidator('instanceCount', ros.validateNumber)(properties.instanceCount));
    errors.collect(ros.propertyValidator('diskCapacity', ros.validateNumber)(properties.diskCapacity));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('requestPars', ros.validateString)(properties.requestPars));
    errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateString)(properties.pubNetworkFlow));
    errors.collect(ros.propertyValidator('netType', ros.requiredValidator)(properties.netType));
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterSpecification: ros.stringToRosTemplate(properties.clusterSpecification),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      ClusterVersion: ros.stringToRosTemplate(properties.clusterVersion),
      InstanceCount: ros.numberToRosTemplate(properties.instanceCount),
      NetType: ros.stringToRosTemplate(properties.netType),
      AclEntryList: ros.listMapper(ros.stringToRosTemplate)(properties.aclEntryList),
      ClusterAliasName: ros.stringToRosTemplate(properties.clusterAliasName),
      ConnectionType: ros.stringToRosTemplate(properties.connectionType),
      DiskCapacity: ros.numberToRosTemplate(properties.diskCapacity),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      PrivateSlbSpecification: ros.stringToRosTemplate(properties.privateSlbSpecification),
      PubNetworkFlow: ros.stringToRosTemplate(properties.pubNetworkFlow),
      PubSlbSpecification: ros.stringToRosTemplate(properties.pubSlbSpecification),
      RequestPars: ros.stringToRosTemplate(properties.requestPars),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclEntryList: acl entry list
     */
    public readonly attrAclEntryList: ros.IResolvable;

    /**
     * @Attribute AclId: acl id
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AppVersion: app version
     */
    public readonly attrAppVersion: ros.IResolvable;

    /**
     * @Attribute ClusterAliasName: cluster alias name
     */
    public readonly attrClusterAliasName: ros.IResolvable;

    /**
     * @Attribute ClusterId: cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterName: cluster name
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    public readonly attrClusterSpecification: ros.IResolvable;

    /**
     * @Attribute ClusterType: cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    public readonly attrClusterVersion: ros.IResolvable;

    /**
     * @Attribute ConnectionType: network connect type
     */
    public readonly attrConnectionType: ros.IResolvable;

    /**
     * @Attribute Cpu: cpu core size
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute DiskCapacity: disk capacity, unit: G
     */
    public readonly attrDiskCapacity: ros.IResolvable;

    /**
     * @Attribute DiskType: disk type
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * @Attribute HealthStatus: health status
     */
    public readonly attrHealthStatus: ros.IResolvable;

    /**
     * @Attribute InstanceCount: instance count
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * @Attribute InstanceId: instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InternetAddress: internet address
     */
    public readonly attrInternetAddress: ros.IResolvable;

    /**
     * @Attribute InternetDomain: internet domain
     */
    public readonly attrInternetDomain: ros.IResolvable;

    /**
     * @Attribute InternetPort: internet port
     */
    public readonly attrInternetPort: ros.IResolvable;

    /**
     * @Attribute IntranetAddress: intranet address
     */
    public readonly attrIntranetAddress: ros.IResolvable;

    /**
     * @Attribute IntranetDomain: intranet domain
     */
    public readonly attrIntranetDomain: ros.IResolvable;

    /**
     * @Attribute IntranetPort: intranet port
     */
    public readonly attrIntranetPort: ros.IResolvable;

    /**
     * @Attribute MemoryCapacity: memory capacity
     */
    public readonly attrMemoryCapacity: ros.IResolvable;

    /**
     * @Attribute NetType: network type, Enum: privatenet,pubnet
     */
    public readonly attrNetType: ros.IResolvable;

    /**
     * @Attribute PayInfo: pay info
     */
    public readonly attrPayInfo: ros.IResolvable;

    /**
     * @Attribute PubNetworkFlow: pub network flow
     */
    public readonly attrPubNetworkFlow: ros.IResolvable;

    /**
     * @Attribute VSwitchId: switcher Id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    public clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: cluster type
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    public clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: instance count
     */
    public instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    public netType: string | ros.IResolvable;

    /**
     * @Property aclEntryList: acl entry list
     */
    public aclEntryList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterAliasName: cluster alias name
     */
    public clusterAliasName: string | ros.IResolvable | undefined;

    /**
     * @Property connectionType: network connect type
     */
    public connectionType: string | ros.IResolvable | undefined;

    /**
     * @Property diskCapacity: disk capacity, unit: G
     */
    public diskCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property diskType: disk type
     */
    public diskType: string | ros.IResolvable | undefined;

    /**
     * @Property privateSlbSpecification:
     */
    public privateSlbSpecification: string | ros.IResolvable | undefined;

    /**
     * @Property pubNetworkFlow: pub network flow
     */
    public pubNetworkFlow: string | ros.IResolvable | undefined;

    /**
     * @Property pubSlbSpecification:
     */
    public pubSlbSpecification: string | ros.IResolvable | undefined;

    /**
     * @Property requestPars:
     */
    public requestPars: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: vpc id
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: switcher Id
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntryList = this.getAtt('AclEntryList');
        this.attrAclId = this.getAtt('AclId');
        this.attrAppVersion = this.getAtt('AppVersion');
        this.attrClusterAliasName = this.getAtt('ClusterAliasName');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterSpecification = this.getAtt('ClusterSpecification');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrClusterVersion = this.getAtt('ClusterVersion');
        this.attrConnectionType = this.getAtt('ConnectionType');
        this.attrCpu = this.getAtt('Cpu');
        this.attrDiskCapacity = this.getAtt('DiskCapacity');
        this.attrDiskType = this.getAtt('DiskType');
        this.attrHealthStatus = this.getAtt('HealthStatus');
        this.attrInstanceCount = this.getAtt('InstanceCount');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInternetAddress = this.getAtt('InternetAddress');
        this.attrInternetDomain = this.getAtt('InternetDomain');
        this.attrInternetPort = this.getAtt('InternetPort');
        this.attrIntranetAddress = this.getAtt('IntranetAddress');
        this.attrIntranetDomain = this.getAtt('IntranetDomain');
        this.attrIntranetPort = this.getAtt('IntranetPort');
        this.attrMemoryCapacity = this.getAtt('MemoryCapacity');
        this.attrNetType = this.getAtt('NetType');
        this.attrPayInfo = this.getAtt('PayInfo');
        this.attrPubNetworkFlow = this.getAtt('PubNetworkFlow');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterSpecification = props.clusterSpecification;
        this.clusterType = props.clusterType;
        this.clusterVersion = props.clusterVersion;
        this.instanceCount = props.instanceCount;
        this.netType = props.netType;
        this.aclEntryList = props.aclEntryList;
        this.clusterAliasName = props.clusterAliasName;
        this.connectionType = props.connectionType;
        this.diskCapacity = props.diskCapacity;
        this.diskType = props.diskType;
        this.privateSlbSpecification = props.privateSlbSpecification;
        this.pubNetworkFlow = props.pubNetworkFlow;
        this.pubSlbSpecification = props.pubSlbSpecification;
        this.requestPars = props.requestPars;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterSpecification: this.clusterSpecification,
            clusterType: this.clusterType,
            clusterVersion: this.clusterVersion,
            instanceCount: this.instanceCount,
            netType: this.netType,
            aclEntryList: this.aclEntryList,
            clusterAliasName: this.clusterAliasName,
            connectionType: this.connectionType,
            diskCapacity: this.diskCapacity,
            diskType: this.diskType,
            privateSlbSpecification: this.privateSlbSpecification,
            pubNetworkFlow: this.pubNetworkFlow,
            pubSlbSpecification: this.pubSlbSpecification,
            requestPars: this.requestPars,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MSE::Gateway`
 */
export interface RosGatewayProps {

    /**
     * @Property replica: Gateway Node Number
     */
    readonly replica: number | ros.IResolvable;

    /**
     * @Property spec: Gateway Node Specifications
     */
    readonly spec: string | ros.IResolvable;

    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    readonly backupVSwitchId?: string | ros.IResolvable;

    /**
     * @Property enterpriseSecurityGroup:
     */
    readonly enterpriseSecurityGroup?: string | ros.IResolvable;

    /**
     * @Property internetSlbSpec:
     */
    readonly internetSlbSpec?: string | ros.IResolvable;

    /**
     * @Property name:
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property slbSpec:
     */
    readonly slbSpec?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupVSwitchId', ros.validateString)(properties.backupVSwitchId));
    errors.collect(ros.propertyValidator('enterpriseSecurityGroup', ros.validateString)(properties.enterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('slbSpec', ros.validateString)(properties.slbSpec));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateAllowedValues)({
          data: properties.spec,
          allowedValues: ["MSE_GTW_2_4_200_c","MSE_GTW_4_8_200_c","MSE_GTW_8_16_200_c","MSE_GTW_16_32_200_c"],
        }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    errors.collect(ros.propertyValidator('internetSlbSpec', ros.validateString)(properties.internetSlbSpec));
    errors.collect(ros.propertyValidator('replica', ros.requiredValidator)(properties.replica));
    errors.collect(ros.propertyValidator('replica', ros.validateNumber)(properties.replica));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway` resource.
 */
// @ts-ignore TS6133
function rosGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      Replica: ros.numberToRosTemplate(properties.replica),
      Spec: ros.stringToRosTemplate(properties.spec),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      BackupVSwitchId: ros.stringToRosTemplate(properties.backupVSwitchId),
      EnterpriseSecurityGroup: ros.stringToRosTemplate(properties.enterpriseSecurityGroup),
      InternetSlbSpec: ros.stringToRosTemplate(properties.internetSlbSpec),
      Name: ros.stringToRosTemplate(properties.name),
      SlbSpec: ros.stringToRosTemplate(properties.slbSpec),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::Gateway`
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackupVSwitchId: VSwitchId For Backup
     */
    public readonly attrBackupVSwitchId: ros.IResolvable;

    /**
     * @Attribute GatewayUniqueId: Gateway unique identification
     */
    public readonly attrGatewayUniqueId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Replica: Gateway Node Number
     */
    public readonly attrReplica: ros.IResolvable;

    /**
     * @Attribute Spec: Gateway Node Specifications
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute VSwitchId: VSwitchId
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replica: Gateway Node Number
     */
    public replica: number | ros.IResolvable;

    /**
     * @Property spec: Gateway Node Specifications
     */
    public spec: string | ros.IResolvable;

    /**
     * @Property vpcId: VpcId
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    public backupVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property enterpriseSecurityGroup:
     */
    public enterpriseSecurityGroup: string | ros.IResolvable | undefined;

    /**
     * @Property internetSlbSpec:
     */
    public internetSlbSpec: string | ros.IResolvable | undefined;

    /**
     * @Property name:
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property slbSpec:
     */
    public slbSpec: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::Gateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupVSwitchId = this.getAtt('BackupVSwitchId');
        this.attrGatewayUniqueId = this.getAtt('GatewayUniqueId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrReplica = this.getAtt('Replica');
        this.attrSpec = this.getAtt('Spec');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replica = props.replica;
        this.spec = props.spec;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.backupVSwitchId = props.backupVSwitchId;
        this.enterpriseSecurityGroup = props.enterpriseSecurityGroup;
        this.internetSlbSpec = props.internetSlbSpec;
        this.name = props.name;
        this.slbSpec = props.slbSpec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replica: this.replica,
            spec: this.spec,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            backupVSwitchId: this.backupVSwitchId,
            enterpriseSecurityGroup: this.enterpriseSecurityGroup,
            internetSlbSpec: this.internetSlbSpec,
            name: this.name,
            slbSpec: this.slbSpec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
