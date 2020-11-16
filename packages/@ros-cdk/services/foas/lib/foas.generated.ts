// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::FOAS::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly clusterName: string;

    /**
     * @Property description: Cluster description.
     */
    readonly description: string;

    /**
     * @Property ossBucket: Bucket name in your OSS.
     */
    readonly ossBucket: string;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string;

    /**
     * @Property order: Order detail. Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    readonly order?: RosCluster.OrderProperty | ros.IResolvable;

    /**
     * @Property orderId: Order Id. Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    readonly orderId?: string;
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
    errors.collect(ros.propertyValidator('order', RosCluster_OrderPropertyValidator)(properties.order));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    if(properties.vSwitchId && (Array.isArray(properties.vSwitchId) || (typeof properties.vSwitchId) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchId', ros.validateLength)({
            data: properties.vSwitchId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('ossBucket', ros.requiredValidator)(properties.ossBucket));
    if(properties.ossBucket && (Array.isArray(properties.ossBucket) || (typeof properties.ossBucket) === 'string')) {
        errors.collect(ros.propertyValidator('ossBucket', ros.validateLength)({
            data: properties.ossBucket.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ossBucket', ros.validateString)(properties.ossBucket));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    if(properties.clusterName && (typeof properties.clusterName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterName', ros.validateAllowedPattern)({
          data: properties.clusterName,
          reg: /[a-z][a-z0-9_]{2,63}/
        }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    if(properties.orderId && (Array.isArray(properties.orderId) || (typeof properties.orderId) === 'string')) {
        errors.collect(ros.propertyValidator('orderId', ros.validateLength)({
            data: properties.orderId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('orderId', ros.validateString)(properties.orderId));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterName: ros.stringToRosTemplate(properties.clusterName),
      Description: ros.stringToRosTemplate(properties.description),
      OssBucket: ros.stringToRosTemplate(properties.ossBucket),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Order: rosClusterOrderPropertyToRosTemplate(properties.order),
      OrderId: ros.stringToRosTemplate(properties.orderId),
    };
}

/**
 * A ROS template type:  `ALIYUN::FOAS::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute EngineVersions: Engine Versions.
     */
    public readonly attrEngineVersions: any;

    /**
     * @Attribute MasterInstanceInfos: Master instance infos.
     */
    public readonly attrMasterInstanceInfos: any;

    /**
     * @Attribute OrderId: Order ID.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute SecurityGroupId: Security group Id.
     */
    public readonly attrSecurityGroupId: any;

    /**
     * @Attribute SlaveInstanceInfos: Slave instance infos.
     */
    public readonly attrSlaveInstanceInfos: any;

    /**
     * @Attribute State: Cluster status.
     */
    public readonly attrState: any;

    /**
     * @Attribute VSwitchIds: VSwitch Ids.
     */
    public readonly attrVSwitchIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    public clusterName: string;

    /**
     * @Property description: Cluster description.
     */
    public description: string;

    /**
     * @Property ossBucket: Bucket name in your OSS.
     */
    public ossBucket: string;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    public vSwitchId: string;

    /**
     * @Property order: Order detail. Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    public order: RosCluster.OrderProperty | ros.IResolvable | undefined;

    /**
     * @Property orderId: Order Id. Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    public orderId: string | undefined;

    /**
     * Create a new `ALIYUN::FOAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = ros.Token.asString(this.getAtt('ClusterId'));
        this.attrEngineVersions = ros.Token.asString(this.getAtt('EngineVersions'));
        this.attrMasterInstanceInfos = ros.Token.asString(this.getAtt('MasterInstanceInfos'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrSecurityGroupId = ros.Token.asString(this.getAtt('SecurityGroupId'));
        this.attrSlaveInstanceInfos = ros.Token.asString(this.getAtt('SlaveInstanceInfos'));
        this.attrState = ros.Token.asString(this.getAtt('State'));
        this.attrVSwitchIds = ros.Token.asString(this.getAtt('VSwitchIds'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.description = props.description;
        this.ossBucket = props.ossBucket;
        this.vSwitchId = props.vSwitchId;
        this.order = props.order;
        this.orderId = props.orderId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterName: this.clusterName,
            description: this.description,
            ossBucket: this.ossBucket,
            vSwitchId: this.vSwitchId,
            order: this.order,
            orderId: this.orderId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface OrderProperty {
        /**
         * @Property payModel: Pay model. Valid values: pre, post. Default to post.
         */
        readonly payModel?: string;
        /**
         * @Property period: Pre paid time period. Unit is month. Default to 1.
         */
        readonly period?: number;
        /**
         * @Property masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
         */
        readonly masterNumber?: number;
        /**
         * @Property masterSpec: Master spec, such as Ecs_4c16g.
         */
        readonly masterSpec: string;
        /**
         * @Property slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
         */
        readonly slaveNumber?: number;
        /**
         * @Property slaveSpec: Master spec, such as Ecs_4c16g.
         */
        readonly slaveSpec: string;
    }
}
/**
 * Determine whether the given properties match those of a `OrderProperty`
 *
 * @param properties - the TypeScript properties of a `OrderProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_OrderPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.payModel && (typeof properties.payModel) !== 'object') {
        errors.collect(ros.propertyValidator('payModel', ros.validateAllowedValues)({
          data: properties.payModel,
          allowedValues: ["pre","post"],
        }));
    }
    errors.collect(ros.propertyValidator('payModel', ros.validateString)(properties.payModel));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.masterNumber && (typeof properties.masterNumber) !== 'object') {
        errors.collect(ros.propertyValidator('masterNumber', ros.validateAllowedValues)({
          data: properties.masterNumber,
          allowedValues: [1,3],
        }));
    }
    errors.collect(ros.propertyValidator('masterNumber', ros.validateNumber)(properties.masterNumber));
    errors.collect(ros.propertyValidator('masterSpec', ros.requiredValidator)(properties.masterSpec));
    if(properties.masterSpec && (typeof properties.masterSpec) !== 'object') {
        errors.collect(ros.propertyValidator('masterSpec', ros.validateAllowedPattern)({
          data: properties.masterSpec,
          reg: /^Ecs_\d+c\d+g$/
        }));
    }
    errors.collect(ros.propertyValidator('masterSpec', ros.validateString)(properties.masterSpec));
    if(properties.slaveNumber && (typeof properties.slaveNumber) !== 'object') {
        errors.collect(ros.propertyValidator('slaveNumber', ros.validateRange)({
            data: properties.slaveNumber,
            min: 2,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('slaveNumber', ros.validateNumber)(properties.slaveNumber));
    errors.collect(ros.propertyValidator('slaveSpec', ros.requiredValidator)(properties.slaveSpec));
    if(properties.slaveSpec && (typeof properties.slaveSpec) !== 'object') {
        errors.collect(ros.propertyValidator('slaveSpec', ros.validateAllowedPattern)({
          data: properties.slaveSpec,
          reg: /^Ecs_\d+c\d+g$/
        }));
    }
    errors.collect(ros.propertyValidator('slaveSpec', ros.validateString)(properties.slaveSpec));
    return errors.wrap('supplied properties not correct for "OrderProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster.Order` resource
 *
 * @param properties - the TypeScript properties of a `OrderProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster.Order` resource.
 */
// @ts-ignore TS6133
function rosClusterOrderPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_OrderPropertyValidator(properties).assertSuccess();
    return {
      PayModel: ros.stringToRosTemplate(properties.payModel),
      Period: ros.numberToRosTemplate(properties.period),
      MasterNumber: ros.numberToRosTemplate(properties.masterNumber),
      MasterSpec: ros.stringToRosTemplate(properties.masterSpec),
      SlaveNumber: ros.numberToRosTemplate(properties.slaveNumber),
      SlaveSpec: ros.stringToRosTemplate(properties.slaveSpec),
    };
}

/**
 * Properties for defining a `ALIYUN::FOAS::Project`
 */
export interface RosProjectProps {

    /**
     * @Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    readonly deployType: string;

    /**
     * @Property managerIds: Comma delimited account Id list of managers.
     */
    readonly managerIds: string;

    /**
     * @Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly name: string;

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string;

    /**
     * @Property description: Project description.
     */
    readonly description?: string;

    /**
     * @Property orderId: Order Id of Shared cluster.
     */
    readonly orderId?: string;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deployType', ros.requiredValidator)(properties.deployType));
    if(properties.deployType && (typeof properties.deployType) !== 'object') {
        errors.collect(ros.propertyValidator('deployType', ros.validateAllowedValues)({
          data: properties.deployType,
          allowedValues: ["cell","public"],
        }));
    }
    errors.collect(ros.propertyValidator('deployType', ros.validateString)(properties.deployType));
    errors.collect(ros.propertyValidator('managerIds', ros.requiredValidator)(properties.managerIds));
    if(properties.managerIds && (Array.isArray(properties.managerIds) || (typeof properties.managerIds) === 'string')) {
        errors.collect(ros.propertyValidator('managerIds', ros.validateLength)({
            data: properties.managerIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('managerIds', ros.validateString)(properties.managerIds));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.clusterId && (Array.isArray(properties.clusterId) || (typeof properties.clusterId) === 'string')) {
        errors.collect(ros.propertyValidator('clusterId', ros.validateLength)({
            data: properties.clusterId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.orderId && (Array.isArray(properties.orderId) || (typeof properties.orderId) === 'string')) {
        errors.collect(ros.propertyValidator('orderId', ros.validateLength)({
            data: properties.orderId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('orderId', ros.validateString)(properties.orderId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /[a-z][a-z0-9_]{2,63}/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      DeployType: ros.stringToRosTemplate(properties.deployType),
      ManagerIds: ros.stringToRosTemplate(properties.managerIds),
      Name: ros.stringToRosTemplate(properties.name),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      Description: ros.stringToRosTemplate(properties.description),
      OrderId: ros.stringToRosTemplate(properties.orderId),
    };
}

/**
 * A ROS template type:  `ALIYUN::FOAS::Project`
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Project";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute State: Project state.
     */
    public readonly attrState: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    public deployType: string;

    /**
     * @Property managerIds: Comma delimited account Id list of managers.
     */
    public managerIds: string;

    /**
     * @Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    public name: string;

    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | undefined;

    /**
     * @Property description: Project description.
     */
    public description: string | undefined;

    /**
     * @Property orderId: Order Id of Shared cluster.
     */
    public orderId: string | undefined;

    /**
     * Create a new `ALIYUN::FOAS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrState = ros.Token.asString(this.getAtt('State'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deployType = props.deployType;
        this.managerIds = props.managerIds;
        this.name = props.name;
        this.clusterId = props.clusterId;
        this.description = props.description;
        this.orderId = props.orderId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deployType: this.deployType,
            managerIds: this.managerIds,
            name: this.name,
            clusterId: this.clusterId,
            description: this.description,
            orderId: this.orderId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
