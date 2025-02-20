// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CS::AnyCluster`
 */
export interface RosAnyClusterProps {

    /**
     * @Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnyClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the result of the validation.
 */
function RosAnyClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterConfig', ros.requiredValidator)(properties.clusterConfig));
    errors.collect(ros.propertyValidator('clusterConfig', ros.hashValidator(ros.validateAny))(properties.clusterConfig));
    return errors.wrap('supplied properties not correct for "RosAnyClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource.
 */
// @ts-ignore TS6133
function rosAnyClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnyClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.clusterConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::AnyCluster`
 */
export class RosAnyCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::AnyCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterConfig: Cluster config.
     */
    public clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::AnyCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnyClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnyCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterConfig = props.clusterConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterConfig: this.clusterConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnyClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CS::ClusterNodePool`
 */
export interface RosClusterNodePoolProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    readonly scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;

    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    readonly autoScaling?: RosClusterNodePool.AutoScalingProperty | ros.IResolvable;

    /**
     * @Property count: The number of nodes in the node pool.
     */
    readonly count?: number | ros.IResolvable;

    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    readonly kubernetesConfig?: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable;

    /**
     * @Property management: The configurations of the managed node pool.
     */
    readonly management?: RosClusterNodePool.ManagementProperty | ros.IResolvable;

    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    readonly nodePoolInfo?: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable;

    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    readonly teeConfig?: RosClusterNodePool.TeeConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterNodePoolProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolProps`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePoolPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('teeConfig', RosClusterNodePool_TeeConfigPropertyValidator)(properties.teeConfig));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('nodePoolInfo', RosClusterNodePool_NodePoolInfoPropertyValidator)(properties.nodePoolInfo));
    errors.collect(ros.propertyValidator('kubernetesConfig', RosClusterNodePool_KubernetesConfigPropertyValidator)(properties.kubernetesConfig));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('management', RosClusterNodePool_ManagementPropertyValidator)(properties.management));
    errors.collect(ros.propertyValidator('autoScaling', RosClusterNodePool_AutoScalingPropertyValidator)(properties.autoScaling));
    errors.collect(ros.propertyValidator('scalingGroup', ros.requiredValidator)(properties.scalingGroup));
    errors.collect(ros.propertyValidator('scalingGroup', RosClusterNodePool_ScalingGroupPropertyValidator)(properties.scalingGroup));
    return errors.wrap('supplied properties not correct for "RosClusterNodePoolProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterNodePoolPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ScalingGroup: rosClusterNodePoolScalingGroupPropertyToRosTemplate(properties.scalingGroup),
      AutoScaling: rosClusterNodePoolAutoScalingPropertyToRosTemplate(properties.autoScaling),
      Count: ros.numberToRosTemplate(properties.count),
      KubernetesConfig: rosClusterNodePoolKubernetesConfigPropertyToRosTemplate(properties.kubernetesConfig),
      Management: rosClusterNodePoolManagementPropertyToRosTemplate(properties.management),
      NodePoolInfo: rosClusterNodePoolNodePoolInfoPropertyToRosTemplate(properties.nodePoolInfo),
      TeeConfig: rosClusterNodePoolTeeConfigPropertyToRosTemplate(properties.teeConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ClusterNodePool`
 */
export class RosClusterNodePool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterNodePool";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NodePoolId: Cluster node pool ID.
     */
    public readonly attrNodePoolId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    public scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;

    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    public autoScaling: RosClusterNodePool.AutoScalingProperty | ros.IResolvable | undefined;

    /**
     * @Property count: The number of nodes in the node pool.
     */
    public count: number | ros.IResolvable | undefined;

    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    public kubernetesConfig: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property management: The configurations of the managed node pool.
     */
    public management: RosClusterNodePool.ManagementProperty | ros.IResolvable | undefined;

    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    public nodePoolInfo: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable | undefined;

    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    public teeConfig: RosClusterNodePool.TeeConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ClusterNodePool`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterNodePool.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNodePoolId = this.getAtt('NodePoolId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.scalingGroup = props.scalingGroup;
        this.autoScaling = props.autoScaling;
        this.count = props.count;
        this.kubernetesConfig = props.kubernetesConfig;
        this.management = props.management;
        this.nodePoolInfo = props.nodePoolInfo;
        this.teeConfig = props.teeConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            scalingGroup: this.scalingGroup,
            autoScaling: this.autoScaling,
            count: this.count,
            kubernetesConfig: this.kubernetesConfig,
            management: this.management,
            nodePoolInfo: this.nodePoolInfo,
            teeConfig: this.teeConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterNodePoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface AutoScalingProperty {
        /**
         * @Property eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
         */
        readonly eipBandwidth?: number | ros.IResolvable;
        /**
         * @Property type: The instance types that can be used for the auto scaling of the node pool. Valid values:
     * cpu: regular instance.
     * gpu: GPU-accelerated instance.
     * gpushare: shared GPU-accelerated instance.
     * spot: preemptible instance.
     * Default value: cpu.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
     * true: associates an EIP with the node pool.
     * false: does not associate an EIP with the node pool.
     * Default value: false.
         */
        readonly isBondEip?: boolean | ros.IResolvable;
        /**
         * @Property minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly minInstances?: number | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling.
     * false: disables auto scaling.
     * If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly maxInstances?: number | ros.IResolvable;
        /**
         * @Property eipInternetChargeType: The billing method of the EIP. Valid values:
     * PayByBandwidth: pay-by-bandwidth.
     * PayByTraffic: pay-by-data-transfer.
     * Default value: PayByBandwidth.
         */
        readonly eipInternetChargeType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AutoScalingProperty`
 *
 * @param properties - the TypeScript properties of a `AutoScalingProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_AutoScalingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.eipBandwidth && (typeof properties.eipBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('eipBandwidth', ros.validateRange)({
            data: properties.eipBandwidth,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('eipBandwidth', ros.validateNumber)(properties.eipBandwidth));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('isBondEip', ros.validateBoolean)(properties.isBondEip));
    errors.collect(ros.propertyValidator('minInstances', ros.validateNumber)(properties.minInstances));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('maxInstances', ros.validateNumber)(properties.maxInstances));
    if(properties.eipInternetChargeType && (typeof properties.eipInternetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('eipInternetChargeType', ros.validateAllowedValues)({
          data: properties.eipInternetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('eipInternetChargeType', ros.validateString)(properties.eipInternetChargeType));
    return errors.wrap('supplied properties not correct for "AutoScalingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.AutoScaling` resource
 *
 * @param properties - the TypeScript properties of a `AutoScalingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.AutoScaling` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolAutoScalingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_AutoScalingPropertyValidator(properties).assertSuccess();
    return {
      EipBandwidth: ros.numberToRosTemplate(properties.eipBandwidth),
      Type: ros.stringToRosTemplate(properties.type),
      IsBondEip: ros.booleanToRosTemplate(properties.isBondEip),
      MinInstances: ros.numberToRosTemplate(properties.minInstances),
      Enable: ros.booleanToRosTemplate(properties.enable),
      MaxInstances: ros.numberToRosTemplate(properties.maxInstances),
      EipInternetChargeType: ros.stringToRosTemplate(properties.eipInternetChargeType),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.numberToRosTemplate(properties.size),
      AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
     * true: installs the CloudMonitor agent on ECS nodes.
     * false: does not install the CloudMonitor agent on ECS nodes.
     * Default value: false.
         */
        readonly cmsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property userData: The user-defined data.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosClusterNodePool.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
         */
        readonly unschedulable?: boolean | ros.IResolvable;
        /**
         * @Property taints: The taints of the nodes.
         */
        readonly taints?: Array<RosClusterNodePool.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KubernetesConfigProperty`
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_KubernetesConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('cmsEnabled', ros.validateBoolean)(properties.cmsEnabled));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.requiredValidator)(properties.runtimeVersion));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.validateString)(properties.runtimeVersion));
    if(properties.labels && (Array.isArray(properties.labels) || (typeof properties.labels) === 'string')) {
        errors.collect(ros.propertyValidator('labels', ros.validateLength)({
            data: properties.labels.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosClusterNodePool_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('unschedulable', ros.validateBoolean)(properties.unschedulable));
    if(properties.taints && (Array.isArray(properties.taints) || (typeof properties.taints) === 'string')) {
        errors.collect(ros.propertyValidator('taints', ros.validateLength)({
            data: properties.taints.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('taints', ros.listValidator(RosClusterNodePool_TaintsPropertyValidator))(properties.taints));
    return errors.wrap('supplied properties not correct for "KubernetesConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.KubernetesConfig` resource
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.KubernetesConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolKubernetesConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_KubernetesConfigPropertyValidator(properties).assertSuccess();
    return {
      CpuPolicy: ros.stringToRosTemplate(properties.cpuPolicy),
      Runtime: ros.stringToRosTemplate(properties.runtime),
      CmsEnabled: ros.booleanToRosTemplate(properties.cmsEnabled),
      UserData: ros.stringToRosTemplate(properties.userData),
      NodeNameMode: ros.stringToRosTemplate(properties.nodeNameMode),
      RuntimeVersion: ros.stringToRosTemplate(properties.runtimeVersion),
      Labels: ros.listMapper(rosClusterNodePoolLabelsPropertyToRosTemplate)(properties.labels),
      Unschedulable: ros.booleanToRosTemplate(properties.unschedulable),
      Taints: ros.listMapper(rosClusterNodePoolTaintsPropertyToRosTemplate)(properties.taints),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Labels` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_LabelsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface ManagementProperty {
        /**
         * @Property upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
         */
        readonly upgradeConfig?: RosClusterNodePool.UpgradeConfigProperty | ros.IResolvable;
        /**
         * @Property autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
     * true: enables auto repairing.
     * false: disables auto repairing.
         */
        readonly autoRepair?: boolean | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable managed node pools. Valid values:
     * true: enables managed node pools.
     * false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagementProperty`
 *
 * @param properties - the TypeScript properties of a `ManagementProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_ManagementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('upgradeConfig', RosClusterNodePool_UpgradeConfigPropertyValidator)(properties.upgradeConfig));
    errors.collect(ros.propertyValidator('autoRepair', ros.validateBoolean)(properties.autoRepair));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "ManagementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Management` resource
 *
 * @param properties - the TypeScript properties of a `ManagementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Management` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolManagementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_ManagementPropertyValidator(properties).assertSuccess();
    return {
      UpgradeConfig: rosClusterNodePoolUpgradeConfigPropertyToRosTemplate(properties.upgradeConfig),
      AutoRepair: ros.booleanToRosTemplate(properties.autoRepair),
      Enable: ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface NodePoolInfoProperty {
        /**
         * @Property resourceGroupId: The ID of the resource group to which the node pool belongs.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolInfoProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_NodePoolInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "NodePoolInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.NodePoolInfo` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.NodePoolInfo` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolNodePoolInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_NodePoolInfoPropertyValidator(properties).assertSuccess();
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface ScalingGroupProperty {
        /**
         * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
     * true: supplements preemptible instances.
     * false: does not supplement preemptible instances.
         */
        readonly spotInstanceRemedy?: boolean | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosClusterNodePool.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
     * true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
     * false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
         */
        readonly compensateWithOnDemand?: boolean | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
         */
        readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
     * true: enables auto-renewal.
     * false: disables auto-renewal.
     * Default value: true.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
         */
        readonly onDemandBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
         */
        readonly spotPriceLimit?: Array<RosClusterNodePool.SpotPriceLimitProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
         */
        readonly tags?: RosClusterNodePool.TagsProperty[];
        /**
         * @Property spotStrategy: The type of preemptible instance. Valid values:
     * NoSpot: non-preemptible instance.
     * SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
     * SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
         */
        readonly spotStrategy?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
        /**
         * @Property multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
     * PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
     * COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
     * BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
     * Default value: PRIORITY.
         */
        readonly multiAzPolicy?: string | ros.IResolvable;
        /**
         * @Property autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1
         */
        readonly autoRenewPeriod?: number | ros.IResolvable;
        /**
         * @Property scalingPolicy: The scaling mode of the scaling group. Valid values:
     * release: the standard mode. ECS instances are created and released based on the resource usage.
     * recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
     * Default value:release.
         */
        readonly scalingPolicy?: string | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group to which the nodes belong.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
         */
        readonly spotInstancePools?: number | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12. 
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_ScalingGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spotInstanceRemedy', ros.validateBoolean)(properties.spotInstanceRemedy));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosClusterNodePool_DataDisksPropertyValidator))(properties.dataDisks));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('compensateWithOnDemand', ros.validateBoolean)(properties.compensateWithOnDemand));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.onDemandPercentageAboveBaseCapacity && (typeof properties.onDemandPercentageAboveBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateRange)({
            data: properties.onDemandPercentageAboveBaseCapacity,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateNumber)(properties.onDemandPercentageAboveBaseCapacity));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.onDemandBaseCapacity && (typeof properties.onDemandBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateRange)({
            data: properties.onDemandBaseCapacity,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateNumber)(properties.onDemandBaseCapacity));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.spotPriceLimit && (Array.isArray(properties.spotPriceLimit) || (typeof properties.spotPriceLimit) === 'string')) {
        errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateLength)({
            data: properties.spotPriceLimit.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.listValidator(RosClusterNodePool_SpotPriceLimitPropertyValidator))(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceTypes', ros.requiredValidator)(properties.instanceTypes));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateString))(properties.instanceTypes));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosClusterNodePool_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    errors.collect(ros.propertyValidator('multiAzPolicy', ros.validateString)(properties.multiAzPolicy));
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('scalingPolicy', ros.validateString)(properties.scalingPolicy));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.spotInstancePools && (typeof properties.spotInstancePools) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstancePools', ros.validateRange)({
            data: properties.spotInstancePools,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('spotInstancePools', ros.validateNumber)(properties.spotInstancePools));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if(properties.rdsInstances && (Array.isArray(properties.rdsInstances) || (typeof properties.rdsInstances) === 'string')) {
        errors.collect(ros.propertyValidator('rdsInstances', ros.validateLength)({
            data: properties.rdsInstances.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('rdsInstances', ros.listValidator(ros.validateString))(properties.rdsInstances));
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "ScalingGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.ScalingGroup` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.ScalingGroup` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolScalingGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_ScalingGroupPropertyValidator(properties).assertSuccess();
    return {
      SpotInstanceRemedy: ros.booleanToRosTemplate(properties.spotInstanceRemedy),
      Platform: ros.stringToRosTemplate(properties.platform),
      DataDisks: ros.listMapper(rosClusterNodePoolDataDisksPropertyToRosTemplate)(properties.dataDisks),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      CompensateWithOnDemand: ros.booleanToRosTemplate(properties.compensateWithOnDemand),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      OnDemandPercentageAboveBaseCapacity: ros.numberToRosTemplate(properties.onDemandPercentageAboveBaseCapacity),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      OnDemandBaseCapacity: ros.numberToRosTemplate(properties.onDemandBaseCapacity),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      SpotPriceLimit: ros.listMapper(rosClusterNodePoolSpotPriceLimitPropertyToRosTemplate)(properties.spotPriceLimit),
      InstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypes),
      Tags: ros.listMapper(rosClusterNodePoolTagsPropertyToRosTemplate)(properties.tags),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      MultiAzPolicy: ros.stringToRosTemplate(properties.multiAzPolicy),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      ScalingPolicy: ros.stringToRosTemplate(properties.scalingPolicy),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      VSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SpotInstancePools: ros.numberToRosTemplate(properties.spotInstancePools),
      Period: ros.numberToRosTemplate(properties.period),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      RdsInstances: ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstances),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface SpotPriceLimitProperty {
        /**
         * @Property priceLimit: The price limit of a preemptible instance.
         */
        readonly priceLimit: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type for preemptible instances.
         */
        readonly instanceType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SpotPriceLimitProperty`
 *
 * @param properties - the TypeScript properties of a `SpotPriceLimitProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_SpotPriceLimitPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('priceLimit', ros.requiredValidator)(properties.priceLimit));
    errors.collect(ros.propertyValidator('priceLimit', ros.validateNumber)(properties.priceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "SpotPriceLimitProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.SpotPriceLimit` resource
 *
 * @param properties - the TypeScript properties of a `SpotPriceLimitProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.SpotPriceLimit` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolSpotPriceLimitPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_SpotPriceLimitPropertyValidator(properties).assertSuccess();
    return {
      PriceLimit: ros.numberToRosTemplate(properties.priceLimit),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TaintsProperty`
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_TaintsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('effect', ros.requiredValidator)(properties.effect));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TaintsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Taints` resource
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Taints` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTaintsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TaintsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Effect: ros.stringToRosTemplate(properties.effect),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TeeConfigProperty {
        /**
         * @Property teeEnable: Specifies whether to enable confidential computing for the cluster.
         */
        readonly teeEnable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TeeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TeeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_TeeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('teeEnable', ros.requiredValidator)(properties.teeEnable));
    errors.collect(ros.propertyValidator('teeEnable', ros.validateBoolean)(properties.teeEnable));
    return errors.wrap('supplied properties not correct for "TeeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.TeeConfig` resource
 *
 * @param properties - the TypeScript properties of a `TeeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.TeeConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTeeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TeeConfigPropertyValidator(properties).assertSuccess();
    return {
      TeeEnable: ros.booleanToRosTemplate(properties.teeEnable),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface UpgradeConfigProperty {
        /**
         * @Property autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
     * true: enables auto upgrading.
     * false: disables auto upgrading.
         */
        readonly autoUpgrade?: boolean | ros.IResolvable;
        /**
         * @Property surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
         */
        readonly surgePercentage?: number | ros.IResolvable;
        /**
         * @Property surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
         */
        readonly surge?: number | ros.IResolvable;
        /**
         * @Property maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
     * Valid values: 1 to 1000.
     * Default value: 1.
         */
        readonly maxUnavailable?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UpgradeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `UpgradeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_UpgradeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoUpgrade', ros.validateBoolean)(properties.autoUpgrade));
    errors.collect(ros.propertyValidator('surgePercentage', ros.validateNumber)(properties.surgePercentage));
    errors.collect(ros.propertyValidator('surge', ros.validateNumber)(properties.surge));
    if(properties.maxUnavailable && (typeof properties.maxUnavailable) !== 'object') {
        errors.collect(ros.propertyValidator('maxUnavailable', ros.validateRange)({
            data: properties.maxUnavailable,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxUnavailable', ros.validateNumber)(properties.maxUnavailable));
    return errors.wrap('supplied properties not correct for "UpgradeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.UpgradeConfig` resource
 *
 * @param properties - the TypeScript properties of a `UpgradeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.UpgradeConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolUpgradeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_UpgradeConfigPropertyValidator(properties).assertSuccess();
    return {
      AutoUpgrade: ros.booleanToRosTemplate(properties.autoUpgrade),
      SurgePercentage: ros.numberToRosTemplate(properties.surgePercentage),
      Surge: ros.numberToRosTemplate(properties.surge),
      MaxUnavailable: ros.numberToRosTemplate(properties.maxUnavailable),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`
 */
export interface RosKubernetesClusterProps {

    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    readonly masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    readonly masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    readonly workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    readonly cpuPolicy?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly masterAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly masterAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    readonly masterCount?: number | ros.IResolvable;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    readonly masterDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    readonly masterDataDisks?: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly masterInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly masterPeriod?: number | ros.IResolvable;

    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly masterPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    readonly nodePortRange?: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosKubernetesCluster.RuntimeProperty | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    readonly sshFlags?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    if(properties.workerPeriod && (typeof properties.workerPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriod', ros.validateAllowedValues)({
          data: properties.workerPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriod', ros.validateNumber)(properties.workerPeriod));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.workerPeriodUnit && (typeof properties.workerPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateAllowedValues)({
          data: properties.workerPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateString)(properties.workerPeriodUnit));
    errors.collect(ros.propertyValidator('masterSystemDiskCategory', ros.validateString)(properties.masterSystemDiskCategory));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    if(properties.masterSystemDiskSize && (typeof properties.masterSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateRange)({
            data: properties.masterSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateNumber)(properties.masterSystemDiskSize));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('nodePortRange', ros.validateString)(properties.nodePortRange));
    if(properties.masterCount && (typeof properties.masterCount) !== 'object') {
        errors.collect(ros.propertyValidator('masterCount', ros.validateAllowedValues)({
          data: properties.masterCount,
          allowedValues: [3,5],
        }));
    }
    errors.collect(ros.propertyValidator('masterCount', ros.validateNumber)(properties.masterCount));
    errors.collect(ros.propertyValidator('sshFlags', ros.validateBoolean)(properties.sshFlags));
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.requiredValidator)(properties.masterVSwitchIds));
    if(properties.masterVSwitchIds && (Array.isArray(properties.masterVSwitchIds) || (typeof properties.masterVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('masterVSwitchIds', ros.validateLength)({
            data: properties.masterVSwitchIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.listValidator(ros.validateAny))(properties.masterVSwitchIds));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('masterDataDisks', ros.listValidator(RosKubernetesCluster_MasterDataDisksPropertyValidator))(properties.masterDataDisks));
    errors.collect(ros.propertyValidator('runtime', RosKubernetesCluster_RuntimePropertyValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    errors.collect(ros.propertyValidator('workerAutoRenew', ros.validateBoolean)(properties.workerAutoRenew));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.requiredValidator)(properties.workerInstanceTypes));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    if(properties.masterPeriod && (typeof properties.masterPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('masterPeriod', ros.validateAllowedValues)({
          data: properties.masterPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('masterPeriod', ros.validateNumber)(properties.masterPeriod));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    if(properties.masterInstanceChargeType && (typeof properties.masterInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('masterInstanceChargeType', ros.validateAllowedValues)({
          data: properties.masterInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('masterInstanceChargeType', ros.validateString)(properties.masterInstanceChargeType));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    if(properties.workerInstanceChargeType && (typeof properties.workerInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateAllowedValues)({
          data: properties.workerInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateString)(properties.workerInstanceChargeType));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.requiredValidator)(properties.masterInstanceTypes));
    if(properties.masterInstanceTypes && (Array.isArray(properties.masterInstanceTypes) || (typeof properties.masterInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('masterInstanceTypes', ros.validateLength)({
            data: properties.masterInstanceTypes.length,
            min: 3,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.listValidator(ros.validateAny))(properties.masterInstanceTypes));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if(properties.masterPeriodUnit && (typeof properties.masterPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('masterPeriodUnit', ros.validateAllowedValues)({
          data: properties.masterPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('masterPeriodUnit', ros.validateString)(properties.masterPeriodUnit));
    if(properties.masterAutoRenewPeriod && (typeof properties.masterAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('masterAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.masterAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('masterAutoRenewPeriod', ros.validateNumber)(properties.masterAutoRenewPeriod));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('masterAutoRenew', ros.validateBoolean)(properties.masterAutoRenew));
    if(properties.workerAutoRenewPeriod && (typeof properties.workerAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.workerAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateNumber)(properties.workerAutoRenewPeriod));
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.requiredValidator)(properties.workerVSwitchIds));
    if(properties.workerVSwitchIds && (Array.isArray(properties.workerVSwitchIds) || (typeof properties.workerVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('workerVSwitchIds', ros.validateLength)({
            data: properties.workerVSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.listValidator(ros.validateAny))(properties.workerVSwitchIds));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('masterDataDisk', ros.validateBoolean)(properties.masterDataDisk));
    return errors.wrap('supplied properties not correct for "RosKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      MasterInstanceTypes: ros.listMapper(ros.objectToRosTemplate)(properties.masterInstanceTypes),
      MasterVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.masterVSwitchIds),
      Name: ros.stringToRosTemplate(properties.name),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      WorkerVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.workerVSwitchIds),
      Addons: ros.listMapper(rosKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      CpuPolicy: ros.stringToRosTemplate(properties.cpuPolicy),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      MasterAutoRenew: ros.booleanToRosTemplate(properties.masterAutoRenew),
      MasterAutoRenewPeriod: ros.numberToRosTemplate(properties.masterAutoRenewPeriod),
      MasterCount: ros.numberToRosTemplate(properties.masterCount),
      MasterDataDisk: ros.booleanToRosTemplate(properties.masterDataDisk),
      MasterDataDisks: ros.listMapper(rosKubernetesClusterMasterDataDisksPropertyToRosTemplate)(properties.masterDataDisks),
      MasterInstanceChargeType: ros.stringToRosTemplate(properties.masterInstanceChargeType),
      MasterPeriod: ros.numberToRosTemplate(properties.masterPeriod),
      MasterPeriodUnit: ros.stringToRosTemplate(properties.masterPeriodUnit),
      MasterSystemDiskCategory: ros.stringToRosTemplate(properties.masterSystemDiskCategory),
      MasterSystemDiskSize: ros.numberToRosTemplate(properties.masterSystemDiskSize),
      NodePortRange: ros.stringToRosTemplate(properties.nodePortRange),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      PodVswitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Runtime: rosKubernetesClusterRuntimePropertyToRosTemplate(properties.runtime),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      SshFlags: ros.booleanToRosTemplate(properties.sshFlags),
      Tags: ros.listMapper(rosKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      Taint: ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      WorkerAutoRenew: ros.booleanToRosTemplate(properties.workerAutoRenew),
      WorkerAutoRenewPeriod: ros.numberToRosTemplate(properties.workerAutoRenewPeriod),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDisks: ros.listMapper(rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      WorkerInstanceChargeType: ros.stringToRosTemplate(properties.workerInstanceChargeType),
      WorkerPeriod: ros.numberToRosTemplate(properties.workerPeriod),
      WorkerPeriodUnit: ros.stringToRosTemplate(properties.workerPeriodUnit),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::KubernetesCluster`
 */
export class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::KubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    public masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    public masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    public workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    public cpuPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public masterAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public masterAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    public masterCount: number | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    public masterDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    public masterDataDisks: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public masterInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public masterPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    public masterPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    public masterSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    public masterSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    public nodePortRange: string | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    public runtime: RosKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    public sshFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public workerAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public workerAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public workerInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public workerPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    public workerPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.masterInstanceTypes = props.masterInstanceTypes;
        this.masterVSwitchIds = props.masterVSwitchIds;
        this.name = props.name;
        this.vpcId = props.vpcId;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerVSwitchIds = props.workerVSwitchIds;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.containerCidr = props.containerCidr;
        this.cpuPolicy = props.cpuPolicy;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loginPassword = props.loginPassword;
        this.masterAutoRenew = props.masterAutoRenew;
        this.masterAutoRenewPeriod = props.masterAutoRenewPeriod;
        this.masterCount = props.masterCount;
        this.masterDataDisk = props.masterDataDisk;
        this.masterDataDisks = props.masterDataDisks;
        this.masterInstanceChargeType = props.masterInstanceChargeType;
        this.masterPeriod = props.masterPeriod;
        this.masterPeriodUnit = props.masterPeriodUnit;
        this.masterSystemDiskCategory = props.masterSystemDiskCategory;
        this.masterSystemDiskSize = props.masterSystemDiskSize;
        this.nodePortRange = props.nodePortRange;
        this.numOfNodes = props.numOfNodes;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.resourceGroupId = props.resourceGroupId;
        this.runtime = props.runtime;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.sshFlags = props.sshFlags;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.workerAutoRenew = props.workerAutoRenew;
        this.workerAutoRenewPeriod = props.workerAutoRenewPeriod;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceChargeType = props.workerInstanceChargeType;
        this.workerPeriod = props.workerPeriod;
        this.workerPeriodUnit = props.workerPeriodUnit;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            masterInstanceTypes: this.masterInstanceTypes,
            masterVSwitchIds: this.masterVSwitchIds,
            name: this.name,
            vpcId: this.vpcId,
            workerInstanceTypes: this.workerInstanceTypes,
            workerVSwitchIds: this.workerVSwitchIds,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            containerCidr: this.containerCidr,
            cpuPolicy: this.cpuPolicy,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loginPassword: this.loginPassword,
            masterAutoRenew: this.masterAutoRenew,
            masterAutoRenewPeriod: this.masterAutoRenewPeriod,
            masterCount: this.masterCount,
            masterDataDisk: this.masterDataDisk,
            masterDataDisks: this.masterDataDisks,
            masterInstanceChargeType: this.masterInstanceChargeType,
            masterPeriod: this.masterPeriod,
            masterPeriodUnit: this.masterPeriodUnit,
            masterSystemDiskCategory: this.masterSystemDiskCategory,
            masterSystemDiskSize: this.masterSystemDiskSize,
            nodePortRange: this.nodePortRange,
            numOfNodes: this.numOfNodes,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            resourceGroupId: this.resourceGroupId,
            runtime: this.runtime,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            sshFlags: this.sshFlags,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            workerAutoRenew: this.workerAutoRenew,
            workerAutoRenewPeriod: this.workerAutoRenewPeriod,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceChargeType: this.workerInstanceChargeType,
            workerPeriod: this.workerPeriod,
            workerPeriodUnit: this.workerPeriodUnit,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface MasterDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MasterDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_MasterDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "MasterDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterMasterDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_MasterDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, docker or sandboxed-container.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuntimeProperty`
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_RuntimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RuntimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Runtime` resource
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Runtime` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterRuntimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_RuntimePropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export interface RosManagedEdgeKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    readonly workerDataDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedEdgeKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('profile', ros.validateString)(properties.profile));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.workerDataDiskSize && (typeof properties.workerDataDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateRange)({
            data: properties.workerDataDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateNumber)(properties.workerDataDiskSize));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('numOfNodes', ros.requiredValidator)(properties.numOfNodes));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('workerDataDiskCategory', ros.validateString)(properties.workerDataDiskCategory));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedEdgeKubernetesCluster_TagsPropertyValidator))(properties.tags));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    return errors.wrap('supplied properties not correct for "RosManagedEdgeKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedEdgeKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      Addons: ros.listMapper(rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ClusterSpec: ros.stringToRosTemplate(properties.clusterSpec),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      Profile: ros.stringToRosTemplate(properties.profile),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      Tags: ros.listMapper(rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDiskCategory: ros.stringToRosTemplate(properties.workerDataDiskCategory),
      WorkerDataDiskSize: ros.numberToRosTemplate(properties.workerDataDiskSize),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export class RosManagedEdgeKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedEdgeKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    public numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    public profile: string | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosManagedEdgeKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    public workerDataDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    public workerDataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedEdgeKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.numOfNodes = props.numOfNodes;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.loginPassword = props.loginPassword;
        this.profile = props.profile;
        this.proxyMode = props.proxyMode;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.timeoutMins = props.timeoutMins;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDiskCategory = props.workerDataDiskCategory;
        this.workerDataDiskSize = props.workerDataDiskSize;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            numOfNodes: this.numOfNodes,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            loginPassword: this.loginPassword,
            profile: this.profile,
            proxyMode: this.proxyMode,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            tags: this.tags,
            timeoutMins: this.timeoutMins,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            workerDataDisk: this.workerDataDisk,
            workerDataDiskCategory: this.workerDataDiskCategory,
            workerDataDiskSize: this.workerDataDiskSize,
            workerInstanceTypes: this.workerInstanceTypes,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedEdgeKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ManagedKubernetesCluster`
 */
export interface RosManagedKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    if(properties.workerPeriod && (typeof properties.workerPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriod', ros.validateAllowedValues)({
          data: properties.workerPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriod', ros.validateNumber)(properties.workerPeriod));
    if(properties.workerPeriodUnit && (typeof properties.workerPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateAllowedValues)({
          data: properties.workerPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateString)(properties.workerPeriodUnit));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('runtime', RosManagedKubernetesCluster_RuntimePropertyValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    errors.collect(ros.propertyValidator('workerAutoRenew', ros.validateBoolean)(properties.workerAutoRenew));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.requiredValidator)(properties.workerInstanceTypes));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    if(properties.workerInstanceChargeType && (typeof properties.workerInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateAllowedValues)({
          data: properties.workerInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateString)(properties.workerInstanceChargeType));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('encryptionProviderKey', ros.validateString)(properties.encryptionProviderKey));
    if(properties.workerAutoRenewPeriod && (typeof properties.workerAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.workerAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateNumber)(properties.workerAutoRenewPeriod));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    return errors.wrap('supplied properties not correct for "RosManagedKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      Addons: ros.listMapper(rosManagedKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ClusterSpec: ros.stringToRosTemplate(properties.clusterSpec),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EncryptionProviderKey: ros.stringToRosTemplate(properties.encryptionProviderKey),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      PodVswitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      Runtime: rosManagedKubernetesClusterRuntimePropertyToRosTemplate(properties.runtime),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      Tags: ros.listMapper(rosManagedKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      Taint: ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      WorkerAutoRenew: ros.booleanToRosTemplate(properties.workerAutoRenew),
      WorkerAutoRenewPeriod: ros.numberToRosTemplate(properties.workerAutoRenewPeriod),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDisks: ros.listMapper(rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      WorkerInstanceChargeType: ros.stringToRosTemplate(properties.workerInstanceChargeType),
      WorkerPeriod: ros.numberToRosTemplate(properties.workerPeriod),
      WorkerPeriodUnit: ros.stringToRosTemplate(properties.workerPeriodUnit),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ManagedKubernetesCluster`
 */
export class RosManagedKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    public encryptionProviderKey: string | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    public runtime: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosManagedKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public workerAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public workerAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public workerInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public workerPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    public workerPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ManagedKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.disableRollback = props.disableRollback;
        this.encryptionProviderKey = props.encryptionProviderKey;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loginPassword = props.loginPassword;
        this.numOfNodes = props.numOfNodes;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.runtime = props.runtime;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.workerAutoRenew = props.workerAutoRenew;
        this.workerAutoRenewPeriod = props.workerAutoRenewPeriod;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceChargeType = props.workerInstanceChargeType;
        this.workerPeriod = props.workerPeriod;
        this.workerPeriodUnit = props.workerPeriodUnit;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            workerInstanceTypes: this.workerInstanceTypes,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            disableRollback: this.disableRollback,
            encryptionProviderKey: this.encryptionProviderKey,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loginPassword: this.loginPassword,
            numOfNodes: this.numOfNodes,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            runtime: this.runtime,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            workerAutoRenew: this.workerAutoRenew,
            workerAutoRenewPeriod: this.workerAutoRenewPeriod,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceChargeType: this.workerInstanceChargeType,
            workerPeriod: this.workerPeriod,
            workerPeriodUnit: this.workerPeriodUnit,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuntimeProperty`
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_RuntimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RuntimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Runtime` resource
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Runtime` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterRuntimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_RuntimePropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export interface RosServerlessKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    readonly natGateway?: boolean | ros.IResolvable;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosServerlessKubernetesCluster.TagsProperty[];

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServerlessKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosServerlessKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosServerlessKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('natGateway', ros.validateBoolean)(properties.natGateway));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServerlessKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('privateZone', ros.validateBoolean)(properties.privateZone));
    return errors.wrap('supplied properties not correct for "RosServerlessKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosServerlessKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerlessKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Addons: ros.listMapper(rosServerlessKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      NatGateway: ros.booleanToRosTemplate(properties.natGateway),
      PrivateZone: ros.booleanToRosTemplate(properties.privateZone),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      Tags: ros.listMapper(rosServerlessKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export class RosServerlessKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ServerlessKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    public natGateway: boolean | ros.IResolvable | undefined;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    public privateZone: boolean | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosServerlessKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerlessKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerlessKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.addons = props.addons;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.kubernetesVersion = props.kubernetesVersion;
        this.natGateway = props.natGateway;
        this.privateZone = props.privateZone;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            addons: this.addons,
            endpointPublicAccess: this.endpointPublicAccess,
            kubernetesVersion: this.kubernetesVersion,
            natGateway: this.natGateway,
            privateZone: this.privateZone,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            vSwitchIds: this.vSwitchIds,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerlessKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerlessKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerlessKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
