// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ROS::AutoEnableService`
 */
export interface RosAutoEnableServiceProps {

    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CloudStorageGateway: Cloud Storage Gateway
     * CMS: Cloud Monitor Service
     * CR: Container Registry
     * CS: Container Service
     * DataHub: Data Hub
     * DataWorks: DataWorks
     * DCDN: Dynamic Route for CDN
     * EDAS: Enterprise Distributed Application Service
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * MaxCompute: MaxCompute
     * NAS: Network Attached Storage
     * MNS: Message Service (MNS)
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * IOT: IoT Platform
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * PrivateZone: Private Zone
     * RocketMQ: RocketMQ
     * SAE: Serverless App Engine
     * SLS: Log Service
     * TrafficMirror: VPC Traffic Mirroring
     * VS: Video Surveillance
     * Xtrace: Tracing Anlaysis
     *
     */
    readonly serviceName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAutoEnableServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the result of the validation.
 */
function RosAutoEnableServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (typeof properties.serviceName) !== 'object') {
        errors.collect(ros.propertyValidator('serviceName', ros.validateAllowedValues)({
          data: properties.serviceName,
          allowedValues: ["IOT","EMAS","MaxCompute","BatchCompute","IMM","Xtrace","DataWorks","FNF","FC","KMS","CS","CR","DataHub","EDAS","CMS","RocketMQ","HBR","ApiGateway","NLP","SLS","NAS","OSS","MNS","TrafficMirror","ARMS","SAE","CloudStorageGateway","PrivateZone","DCDN","VS","AHAS","BrainIndustrial","OTS","PrivateLink"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    return errors.wrap('supplied properties not correct for "RosAutoEnableServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource.
 */
// @ts-ignore TS6133
function rosAutoEnableServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoEnableServicePropsValidator(properties).assertSuccess();
    }
    return {
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::AutoEnableService`
 */
export class RosAutoEnableService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::AutoEnableService";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CloudStorageGateway: Cloud Storage Gateway
     * CMS: Cloud Monitor Service
     * CR: Container Registry
     * CS: Container Service
     * DataHub: Data Hub
     * DataWorks: DataWorks
     * DCDN: Dynamic Route for CDN
     * EDAS: Enterprise Distributed Application Service
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * MaxCompute: MaxCompute
     * NAS: Network Attached Storage
     * MNS: Message Service (MNS)
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * IOT: IoT Platform
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * PrivateZone: Private Zone
     * RocketMQ: RocketMQ
     * SAE: Serverless App Engine
     * SLS: Log Service
     * TrafficMirror: VPC Traffic Mirroring
     * VS: Video Surveillance
     * Xtrace: Tracing Anlaysis
     *
     */
    public serviceName: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoEnableServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoEnableService.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoEnableServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::CustomResource`
 */
export interface RosCustomResourceProps {

    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    readonly serviceToken: string | ros.IResolvable;

    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number | ros.IResolvable;

    /**
     * @Property httpConfig: Config for HTTP&HTTPS service provider.
     */
    readonly httpConfig?: RosCustomResource.HttpConfigProperty | ros.IResolvable;

    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomResourceProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the result of the validation.
 */
function RosCustomResourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceToken', ros.requiredValidator)(properties.serviceToken));
    if(properties.serviceToken && (Array.isArray(properties.serviceToken) || (typeof properties.serviceToken) === 'string')) {
        errors.collect(ros.propertyValidator('serviceToken', ros.validateLength)({
            data: properties.serviceToken.length,
            min: undefined,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('serviceToken', ros.validateString)(properties.serviceToken));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('httpConfig', RosCustomResource_HttpConfigPropertyValidator)(properties.httpConfig));
    return errors.wrap('supplied properties not correct for "RosCustomResourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource.
 */
// @ts-ignore TS6133
function rosCustomResourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomResourcePropsValidator(properties).assertSuccess();
    }
    return {
      ServiceToken: ros.stringToRosTemplate(properties.serviceToken),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      HttpConfig: rosCustomResourceHttpConfigPropertyToRosTemplate(properties.httpConfig),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::CustomResource`
 */
export class RosCustomResource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::CustomResource";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Outputs: Output data received from service provider.
     */
    public readonly attrOutputs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    public serviceToken: string | ros.IResolvable;

    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    public timeout: number | ros.IResolvable;

    /**
     * @Property httpConfig: Config for HTTP&HTTPS service provider.
     */
    public httpConfig: RosCustomResource.HttpConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomResourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomResource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOutputs = this.getAtt('Outputs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceToken = props.serviceToken;
        this.timeout = props.timeout;
        this.httpConfig = props.httpConfig;
        this.parameters = props.parameters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceToken: this.serviceToken,
            timeout: this.timeout,
            httpConfig: this.httpConfig,
            parameters: this.parameters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomResourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCustomResource {
    /**
     * @stability external
     */
    export interface HttpConfigProperty {
        /**
         * @Property signKey: If SignKey is specified, Signature will be added to request data.
     *   "Signature": {
     *      "Date": "2021-03-11T13:32:02Z",
     *      "Value": "10841498499ba1c4b07547a542c3a8718235f983"
     *   }
     * Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * Value: the signature value calculated from the algorithm below.
     * 
     * The signature algorithm:
     * 1.Concatenating signature string:POST
     * \n
     * <content type: if ContentType is specified, use it, else use application/json.>
     * \n
     * <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
     * \n
     * <Date in Signature>
     * \n
     * <header 1 key: sort in alphabetical order>:<header 1 value>
     * \n
     * ...<header N key>:<header 2 value>
     * \n
     * <url in ServiceToken: such as https://abc.com>
     * 2.calculate signature with sha1.
         */
        readonly signKey?: string | ros.IResolvable;
        /**
         * @Property contentType: Content type of request body.
         */
        readonly contentType?: string | ros.IResolvable;
        /**
         * @Property headers: Headers to be passed.
         */
        readonly headers?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HttpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomResource_HttpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.signKey && (Array.isArray(properties.signKey) || (typeof properties.signKey) === 'string')) {
        errors.collect(ros.propertyValidator('signKey', ros.validateLength)({
            data: properties.signKey.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('signKey', ros.validateString)(properties.signKey));
    if(properties.contentType && (typeof properties.contentType) !== 'object') {
        errors.collect(ros.propertyValidator('contentType', ros.validateAllowedValues)({
          data: properties.contentType,
          allowedValues: ["application/json","application/x-www-form-urlencoded"],
        }));
    }
    errors.collect(ros.propertyValidator('contentType', ros.validateString)(properties.contentType));
    errors.collect(ros.propertyValidator('headers', ros.hashValidator(ros.validateAny))(properties.headers));
    return errors.wrap('supplied properties not correct for "HttpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource.HttpConfig` resource
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource.HttpConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomResourceHttpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomResource_HttpConfigPropertyValidator(properties).assertSuccess();
    return {
      SignKey: ros.stringToRosTemplate(properties.signKey),
      ContentType: ros.stringToRosTemplate(properties.contentType),
      Headers: ros.hashMapper(ros.objectToRosTemplate)(properties.headers),
    };
}

/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`
 */
export interface RosResourceCleanerProps {

    /**
     * @Property action: Resource cleaner actions:
     * - Scan: Scanning phase. Scan out the resources to be cleaned up.
     * - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
     * - Scan+CleanUp: Scan first, then CleanUp.
     * - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
     */
    readonly action: string | ros.IResolvable;

    /**
     * @Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    readonly cleanUpRetryCount?: number | ros.IResolvable;

    /**
     * @Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * Default to 1 hour.
     */
    readonly cleanUpTimeout?: number | ros.IResolvable;

    /**
     * @Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    readonly excludedResources?: Array<RosResourceCleaner.ExcludedResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property failureOption: The failure option of cleanup phase:
     * - Normal: Resource failure does not affect the resources that depend on it.
     * - Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.
     */
    readonly failureOption?: string | ros.IResolvable;

    /**
     * @Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
     * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    readonly resourceFilters?: Array<RosResourceCleaner.ResourceFiltersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourceCleanerProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceCleanerProps`
 *
 * @returns the result of the validation.
 */
function RosResourceCleanerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.failureOption && (typeof properties.failureOption) !== 'object') {
        errors.collect(ros.propertyValidator('failureOption', ros.validateAllowedValues)({
          data: properties.failureOption,
          allowedValues: ["Normal","Fast"],
        }));
    }
    errors.collect(ros.propertyValidator('failureOption', ros.validateString)(properties.failureOption));
    if(properties.resourceFilters && (Array.isArray(properties.resourceFilters) || (typeof properties.resourceFilters) === 'string')) {
        errors.collect(ros.propertyValidator('resourceFilters', ros.validateLength)({
            data: properties.resourceFilters.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceFilters', ros.listValidator(RosResourceCleaner_ResourceFiltersPropertyValidator))(properties.resourceFilters));
    errors.collect(ros.propertyValidator('action', ros.requiredValidator)(properties.action));
    if(properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
          data: properties.action,
          allowedValues: ["Scan","CleanUp","Scan+CleanUp","ScanWhenCreatingAndUpdating+CleanUpWhenDeleting"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    if(properties.cleanUpRetryCount && (typeof properties.cleanUpRetryCount) !== 'object') {
        errors.collect(ros.propertyValidator('cleanUpRetryCount', ros.validateRange)({
            data: properties.cleanUpRetryCount,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('cleanUpRetryCount', ros.validateNumber)(properties.cleanUpRetryCount));
    if(properties.cleanUpTimeout && (typeof properties.cleanUpTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('cleanUpTimeout', ros.validateRange)({
            data: properties.cleanUpTimeout,
            min: 60,
            max: 14400,
          }));
    }
    errors.collect(ros.propertyValidator('cleanUpTimeout', ros.validateNumber)(properties.cleanUpTimeout));
    if(properties.excludedResources && (Array.isArray(properties.excludedResources) || (typeof properties.excludedResources) === 'string')) {
        errors.collect(ros.propertyValidator('excludedResources', ros.validateLength)({
            data: properties.excludedResources.length,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('excludedResources', ros.listValidator(RosResourceCleaner_ExcludedResourcesPropertyValidator))(properties.excludedResources));
    return errors.wrap('supplied properties not correct for "RosResourceCleanerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceCleanerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner` resource.
 */
// @ts-ignore TS6133
function rosResourceCleanerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceCleanerPropsValidator(properties).assertSuccess();
    }
    return {
      Action: ros.stringToRosTemplate(properties.action),
      CleanUpRetryCount: ros.numberToRosTemplate(properties.cleanUpRetryCount),
      CleanUpTimeout: ros.numberToRosTemplate(properties.cleanUpTimeout),
      ExcludedResources: ros.listMapper(rosResourceCleanerExcludedResourcesPropertyToRosTemplate)(properties.excludedResources),
      FailureOption: ros.stringToRosTemplate(properties.failureOption),
      ResourceFilters: ros.listMapper(rosResourceCleanerResourceFiltersPropertyToRosTemplate)(properties.resourceFilters),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::ResourceCleaner`
 */
export class RosResourceCleaner extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::ResourceCleaner";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
The format is the same as ResourceDetails.
     */
    public readonly attrNoCleanupResourceDetails: ros.IResolvable;

    /**
     * @Attribute ResourceDetails: The details of resources to be cleaned up.
The value is a list of dict. The dict contains the fields below:
- ResourceType: Resource type of the resource.
- RegionId: Region ID of the resource.
- ResourceId: ID of the resource.
- ResourceName: Name of the resource.
- CleanupType: Cleanup type of the resource. Valid values:
  - Normal: The resource can be deleted normally.
  - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
  - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
- CleanupTypeReasons: The information of the related CleanupType.
- ResourceStatus: Status of the resource. Valid values:
  - Deleting: The resource is deleting.
  - Failure: The deletion of the resource failed.
  - Success: The resource is deleted.
  - Skipped: The deletion of the resource is skipped.
  - Pending: The deletion of the resource is not started.
- ResourceStatusReason: The information of the related ResourceStatus.
- Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
  - ResourceType: Resource type of the dependency resource.
  - RegionId: Region ID of the dependency resource.
  - ResourceId: ID of the dependency resource.
     */
    public readonly attrResourceDetails: ros.IResolvable;

    /**
     * @Attribute ResourceSummary: The details of resources to be cleaned up.
The value is a list of dict. The dict contains the fields below:
- ResourceType: Resource type of the resources.
- DeletingCount: Number of deleting resources of the resource type.
- SuccessCount: Number of deleted resources of the resource type.
- FailureCount: Number of resources that failed to delete of the resource type.
- SkippedCount: Number of skipped resources of the resource type.
- PendingCount: Number of resources that have not been deleted of the resource type.
- OtherCount: Number of other resources of the resource type.
- TotalCount: Number of total resources of the resource type.
     */
    public readonly attrResourceSummary: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property action: Resource cleaner actions:
     * - Scan: Scanning phase. Scan out the resources to be cleaned up.
     * - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
     * - Scan+CleanUp: Scan first, then CleanUp.
     * - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
     */
    public action: string | ros.IResolvable;

    /**
     * @Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    public cleanUpRetryCount: number | ros.IResolvable | undefined;

    /**
     * @Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * Default to 1 hour.
     */
    public cleanUpTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    public excludedResources: Array<RosResourceCleaner.ExcludedResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property failureOption: The failure option of cleanup phase:
     * - Normal: Resource failure does not affect the resources that depend on it.
     * - Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.
     */
    public failureOption: string | ros.IResolvable | undefined;

    /**
     * @Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
     * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    public resourceFilters: Array<RosResourceCleaner.ResourceFiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceCleanerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceCleaner.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNoCleanupResourceDetails = this.getAtt('NoCleanupResourceDetails');
        this.attrResourceDetails = this.getAtt('ResourceDetails');
        this.attrResourceSummary = this.getAtt('ResourceSummary');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.action = props.action;
        this.cleanUpRetryCount = props.cleanUpRetryCount;
        this.cleanUpTimeout = props.cleanUpTimeout;
        this.excludedResources = props.excludedResources;
        this.failureOption = props.failureOption;
        this.resourceFilters = props.resourceFilters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            action: this.action,
            cleanUpRetryCount: this.cleanUpRetryCount,
            cleanUpTimeout: this.cleanUpTimeout,
            excludedResources: this.excludedResources,
            failureOption: this.failureOption,
            resourceFilters: this.resourceFilters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceCleanerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceCleaner {
    /**
     * @stability external
     */
    export interface ExcludedResourcesProperty {
        /**
         * @Property resourceId: The ID of the resource to be excluded.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The resource type of the resource to be excluded.
     * The allowed values are the resource types that ResourceCleaner supports to clean up.
         */
        readonly resourceType?: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the resource to be excluded.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ExcludedResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ExcludedResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceCleaner_ExcludedResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    if(properties.resourceId && (Array.isArray(properties.resourceId) || (typeof properties.resourceId) === 'string')) {
        errors.collect(ros.propertyValidator('resourceId', ros.validateLength)({
            data: properties.resourceId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["ECS:Disk","ECS:Instance","ECS:SecurityGroup","VPC:EIP","VPC:VPC","VPC:VSwitch"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    if(properties.regionId && (Array.isArray(properties.regionId) || (typeof properties.regionId) === 'string')) {
        errors.collect(ros.propertyValidator('regionId', ros.validateLength)({
            data: properties.regionId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "ExcludedResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.ExcludedResources` resource
 *
 * @param properties - the TypeScript properties of a `ExcludedResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.ExcludedResources` resource.
 */
// @ts-ignore TS6133
function rosResourceCleanerExcludedResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceCleaner_ExcludedResourcesPropertyValidator(properties).assertSuccess();
    return {
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
      RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}

export namespace RosResourceCleaner {
    /**
     * @stability external
     */
    export interface ResourceFiltersProperty {
        /**
         * @Property includeDeletionProtection: Whether to include delete protected resources.
     * Default to True.
         */
        readonly includeDeletionProtection?: boolean | ros.IResolvable;
        /**
         * @Property resourceTypePatterns: Resource type fuzzy matching filtering.
     * The relationship of each item is or.
         */
        readonly resourceTypePatterns?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceIds: Resource ID filtering.
     * The relationship of each item is or.
         */
        readonly resourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionIds: Region filtering.
     * The relationship of each item is or.
         */
        readonly regionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceGroupIds: Resource group filtering.
     * The relationship of each item is or.
         */
        readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: Filtering behavior:
     * - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
     * - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property resourceNamePatterns: Resource name fuzzy matching filtering.
     * The relationship of each item is or.
         */
        readonly resourceNamePatterns?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Tag filtering, including custom tags and visible system tags.
     * The relationship of items with different Keys is and. The relationship of items with same Key is or.
         */
        readonly tags?: RosResourceCleaner.TagsProperty[];
    }
}
/**
 * Determine whether the given properties match those of a `ResourceFiltersProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceFiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceCleaner_ResourceFiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('includeDeletionProtection', ros.validateBoolean)(properties.includeDeletionProtection));
    if(properties.resourceTypePatterns && (Array.isArray(properties.resourceTypePatterns) || (typeof properties.resourceTypePatterns) === 'string')) {
        errors.collect(ros.propertyValidator('resourceTypePatterns', ros.validateLength)({
            data: properties.resourceTypePatterns.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceTypePatterns', ros.listValidator(ros.validateString))(properties.resourceTypePatterns));
    if(properties.resourceIds && (Array.isArray(properties.resourceIds) || (typeof properties.resourceIds) === 'string')) {
        errors.collect(ros.propertyValidator('resourceIds', ros.validateLength)({
            data: properties.resourceIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceIds', ros.listValidator(ros.validateString))(properties.resourceIds));
    if(properties.regionIds && (Array.isArray(properties.regionIds) || (typeof properties.regionIds) === 'string')) {
        errors.collect(ros.propertyValidator('regionIds', ros.validateLength)({
            data: properties.regionIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('regionIds', ros.listValidator(ros.validateString))(properties.regionIds));
    if(properties.resourceGroupIds && (Array.isArray(properties.resourceGroupIds) || (typeof properties.resourceGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('resourceGroupIds', ros.validateLength)({
            data: properties.resourceGroupIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceGroupIds', ros.listValidator(ros.validateString))(properties.resourceGroupIds));
    if(properties.effect && (typeof properties.effect) !== 'object') {
        errors.collect(ros.propertyValidator('effect', ros.validateAllowedValues)({
          data: properties.effect,
          allowedValues: ["Deny","Allow"],
        }));
    }
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    if(properties.resourceNamePatterns && (Array.isArray(properties.resourceNamePatterns) || (typeof properties.resourceNamePatterns) === 'string')) {
        errors.collect(ros.propertyValidator('resourceNamePatterns', ros.validateLength)({
            data: properties.resourceNamePatterns.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceNamePatterns', ros.listValidator(ros.validateString))(properties.resourceNamePatterns));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosResourceCleaner_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "ResourceFiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.ResourceFilters` resource
 *
 * @param properties - the TypeScript properties of a `ResourceFiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.ResourceFilters` resource.
 */
// @ts-ignore TS6133
function rosResourceCleanerResourceFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceCleaner_ResourceFiltersPropertyValidator(properties).assertSuccess();
    return {
      IncludeDeletionProtection: ros.booleanToRosTemplate(properties.includeDeletionProtection),
      ResourceTypePatterns: ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypePatterns),
      ResourceIds: ros.listMapper(ros.stringToRosTemplate)(properties.resourceIds),
      RegionIds: ros.listMapper(ros.stringToRosTemplate)(properties.regionIds),
      ResourceGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.resourceGroupIds),
      Effect: ros.stringToRosTemplate(properties.effect),
      ResourceNamePatterns: ros.listMapper(ros.stringToRosTemplate)(properties.resourceNamePatterns),
      Tags: ros.listMapper(rosResourceCleanerTagsPropertyToRosTemplate)(properties.tags),
    };
}

export namespace RosResourceCleaner {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value. 
     * If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
     * If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
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
function RosResourceCleaner_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if(properties.key && (Array.isArray(properties.key) || (typeof properties.key) === 'string')) {
        errors.collect(ros.propertyValidator('key', ros.validateLength)({
            data: properties.key.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::ResourceCleaner.Tags` resource.
 */
// @ts-ignore TS6133
function rosResourceCleanerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceCleaner_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ROS::Sleep`
 */
export interface RosSleepProps {

    /**
     * @Property createDuration: The number of seconds to wait before resource creation.
     */
    readonly createDuration?: number | ros.IResolvable;

    /**
     * @Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    readonly deleteDuration?: number | ros.IResolvable;

    /**
     * @Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    readonly triggers?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    readonly updateDuration?: number | ros.IResolvable;

    /**
     * @Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
     */
    readonly updateRollbackDuration?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSleepProps`
 *
 * @param properties - the TypeScript properties of a `RosSleepProps`
 *
 * @returns the result of the validation.
 */
function RosSleepPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deleteDuration && (typeof properties.deleteDuration) !== 'object') {
        errors.collect(ros.propertyValidator('deleteDuration', ros.validateRange)({
            data: properties.deleteDuration,
            min: 0,
            max: 1800,
          }));
    }
    errors.collect(ros.propertyValidator('deleteDuration', ros.validateNumber)(properties.deleteDuration));
    if(properties.updateRollbackDuration && (typeof properties.updateRollbackDuration) !== 'object') {
        errors.collect(ros.propertyValidator('updateRollbackDuration', ros.validateRange)({
            data: properties.updateRollbackDuration,
            min: 0,
            max: 1800,
          }));
    }
    errors.collect(ros.propertyValidator('updateRollbackDuration', ros.validateNumber)(properties.updateRollbackDuration));
    if(properties.updateDuration && (typeof properties.updateDuration) !== 'object') {
        errors.collect(ros.propertyValidator('updateDuration', ros.validateRange)({
            data: properties.updateDuration,
            min: 0,
            max: 1800,
          }));
    }
    errors.collect(ros.propertyValidator('updateDuration', ros.validateNumber)(properties.updateDuration));
    if(properties.createDuration && (typeof properties.createDuration) !== 'object') {
        errors.collect(ros.propertyValidator('createDuration', ros.validateRange)({
            data: properties.createDuration,
            min: 0,
            max: 1800,
          }));
    }
    errors.collect(ros.propertyValidator('createDuration', ros.validateNumber)(properties.createDuration));
    errors.collect(ros.propertyValidator('triggers', ros.hashValidator(ros.validateAny))(properties.triggers));
    return errors.wrap('supplied properties not correct for "RosSleepProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::Sleep` resource
 *
 * @param properties - the TypeScript properties of a `RosSleepProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::Sleep` resource.
 */
// @ts-ignore TS6133
function rosSleepPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSleepPropsValidator(properties).assertSuccess();
    }
    return {
      CreateDuration: ros.numberToRosTemplate(properties.createDuration),
      DeleteDuration: ros.numberToRosTemplate(properties.deleteDuration),
      Triggers: ros.hashMapper(ros.objectToRosTemplate)(properties.triggers),
      UpdateDuration: ros.numberToRosTemplate(properties.updateDuration),
      UpdateRollbackDuration: ros.numberToRosTemplate(properties.updateRollbackDuration),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::Sleep`
 */
export class RosSleep extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Sleep";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property createDuration: The number of seconds to wait before resource creation.
     */
    public createDuration: number | ros.IResolvable | undefined;

    /**
     * @Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    public deleteDuration: number | ros.IResolvable | undefined;

    /**
     * @Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    public triggers: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    public updateDuration: number | ros.IResolvable | undefined;

    /**
     * @Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
     */
    public updateRollbackDuration: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSleepProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSleep.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.createDuration = props.createDuration;
        this.deleteDuration = props.deleteDuration;
        this.triggers = props.triggers;
        this.updateDuration = props.updateDuration;
        this.updateRollbackDuration = props.updateRollbackDuration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            createDuration: this.createDuration,
            deleteDuration: this.deleteDuration,
            triggers: this.triggers,
            updateDuration: this.updateDuration,
            updateRollbackDuration: this.updateRollbackDuration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSleepPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::Stack`
 */
export interface RosStackProps {

    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateBody?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    readonly templateId?: string | ros.IResolvable;

    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateUrl?: string | ros.IResolvable;

    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    readonly templateVersion?: string | ros.IResolvable;

    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    readonly timeoutMins?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStackProps`
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the result of the validation.
 */
function RosStackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.templateUrl && (Array.isArray(properties.templateUrl) || (typeof properties.templateUrl) === 'string')) {
        errors.collect(ros.propertyValidator('templateUrl', ros.validateLength)({
            data: properties.templateUrl.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('templateUrl', ros.validateString)(properties.templateUrl));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if(properties.templateVersion && (typeof properties.templateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('templateVersion', ros.validateAllowedPattern)({
          data: properties.templateVersion,
          reg: /^v(([1-9])|([1-9][0-9])|([1-9][0-9][0-9]))$/
        }));
    }
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    errors.collect(ros.propertyValidator('templateBody', ros.hashValidator(ros.validateAny))(properties.templateBody));
    if(properties.templateId && (typeof properties.templateId) !== 'object') {
        errors.collect(ros.propertyValidator('templateId', ros.validateAllowedPattern)({
          data: properties.templateId,
          reg: /^([0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:][*][:]\d+[:]template\/[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:]template[/][-_a-zA-Z0-9]+[/][-_a-zA-Z0-9]+)$/
        }));
    }
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosStackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource.
 */
// @ts-ignore TS6133
function rosStackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStackPropsValidator(properties).assertSuccess();
    }
    return {
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      TemplateBody: ros.hashMapper(ros.objectToRosTemplate)(properties.templateBody),
      TemplateId: ros.stringToRosTemplate(properties.templateId),
      TemplateURL: ros.stringToRosTemplate(properties.templateUrl),
      TemplateVersion: ros.stringToRosTemplate(properties.templateVersion),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::Stack`
 */
export class RosStack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    public templateBody: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    public templateId: string | ros.IResolvable | undefined;

    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    public templateUrl: string | ros.IResolvable | undefined;

    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    public templateVersion: string | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::Stack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStack.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.parameters = props.parameters;
        this.resourceGroupId = props.resourceGroupId;
        this.templateBody = props.templateBody;
        this.templateId = props.templateId;
        this.templateUrl = props.templateUrl;
        this.templateVersion = props.templateVersion;
        this.timeoutMins = props.timeoutMins;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            parameters: this.parameters,
            resourceGroupId: this.resourceGroupId,
            templateBody: this.templateBody,
            templateId: this.templateId,
            templateUrl: this.templateUrl,
            templateVersion: this.templateVersion,
            timeoutMins: this.timeoutMins,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface RosWaitConditionProps {

    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string | ros.IResolvable;

    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number | ros.IResolvable;

    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number | ros.IResolvable;

    /**
     * @Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
     */
    readonly showProgressEvent?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWaitConditionProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.showProgressEvent && (typeof properties.showProgressEvent) !== 'object') {
        errors.collect(ros.propertyValidator('showProgressEvent', ros.validateAllowedValues)({
          data: properties.showProgressEvent,
          allowedValues: ["EnabledIfCreateStack","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('showProgressEvent', ros.validateString)(properties.showProgressEvent));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('handle', ros.requiredValidator)(properties.handle));
    errors.collect(ros.propertyValidator('handle', ros.validateString)(properties.handle));
    return errors.wrap('supplied properties not correct for "RosWaitConditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitConditionPropsValidator(properties).assertSuccess();
    }
    return {
      Handle: ros.stringToRosTemplate(properties.handle),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      Count: ros.numberToRosTemplate(properties.count),
      ShowProgressEvent: ros.stringToRosTemplate(properties.showProgressEvent),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`
 */
export class RosWaitCondition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitCondition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    public readonly attrData: ros.IResolvable;

    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrErrorData: ros.IResolvable;

    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrJoinedErrorData: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    public handle: string | ros.IResolvable;

    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    public timeout: number | ros.IResolvable;

    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    public count: number | ros.IResolvable | undefined;

    /**
     * @Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
     */
    public showProgressEvent: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitCondition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrData = this.getAtt('Data');
        this.attrErrorData = this.getAtt('ErrorData');
        this.attrJoinedErrorData = this.getAtt('JoinedErrorData');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.handle = props.handle;
        this.timeout = props.timeout;
        this.count = props.count;
        this.showProgressEvent = props.showProgressEvent;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            handle: this.handle,
            timeout: this.timeout,
            count: this.count,
            showProgressEvent: this.showProgressEvent,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitConditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`
 */
export interface RosWaitConditionHandleProps {

    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * 
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    readonly count?: number | ros.IResolvable;

    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * 
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * 
     * Default to Full.
     */
    readonly mode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWaitConditionHandleProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionHandlePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["Increment","Full"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    return errors.wrap('supplied properties not correct for "RosWaitConditionHandleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionHandlePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitConditionHandlePropsValidator(properties).assertSuccess();
    }
    return {
      Count: ros.numberToRosTemplate(properties.count),
      Mode: ros.stringToRosTemplate(properties.mode),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::WaitConditionHandle`
 */
export class RosWaitConditionHandle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitConditionHandle";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    public readonly attrCurlCli: ros.IResolvable;

    /**
     * @Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    public readonly attrHeaders: ros.IResolvable;

    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    public readonly attrPowerShellCurlCli: ros.IResolvable;

    /**
     * @Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    public readonly attrUrl: ros.IResolvable;

    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
     */
    public readonly attrWindowsCurlCli: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * 
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    public count: number | ros.IResolvable | undefined;

    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * 
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * 
     * Default to Full.
     */
    public mode: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionHandleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitConditionHandle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCurlCli = this.getAtt('CurlCli');
        this.attrHeaders = this.getAtt('Headers');
        this.attrPowerShellCurlCli = this.getAtt('PowerShellCurlCli');
        this.attrUrl = this.getAtt('URL');
        this.attrWindowsCurlCli = this.getAtt('WindowsCurlCli');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.count = props.count;
        this.mode = props.mode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            count: this.count,
            mode: this.mode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitConditionHandlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
