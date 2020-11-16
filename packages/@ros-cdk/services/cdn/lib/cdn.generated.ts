// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::CDN::Domain`
 */
export interface RosDomainProps {

    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string;

    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string;

    /**
     * @Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string;

    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources?: string;

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('checkUrl', ros.validateString)(properties.checkUrl));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('scope', ros.validateString)(properties.scope));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('cdnType', ros.requiredValidator)(properties.cdnType));
    if(properties.cdnType && (typeof properties.cdnType) !== 'object') {
        errors.collect(ros.propertyValidator('cdnType', ros.validateAllowedValues)({
          data: properties.cdnType,
          allowedValues: ["video","download","web","liveStream"],
        }));
    }
    errors.collect(ros.propertyValidator('cdnType', ros.validateString)(properties.cdnType));
    errors.collect(ros.propertyValidator('topLevelDomain', ros.validateString)(properties.topLevelDomain));
    errors.collect(ros.propertyValidator('sources', ros.validateString)(properties.sources));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      CdnType: ros.stringToRosTemplate(properties.cdnType),
      DomainName: ros.stringToRosTemplate(properties.domainName),
      CheckUrl: ros.stringToRosTemplate(properties.checkUrl),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Scope: ros.stringToRosTemplate(properties.scope),
      Sources: ros.stringToRosTemplate(properties.sources),
      TopLevelDomain: ros.stringToRosTemplate(properties.topLevelDomain),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDN::Domain`
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    public readonly attrCname: any;

    /**
     * @Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public readonly attrDomainName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    public cdnType: string;

    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public domainName: string;

    /**
     * @Property checkUrl: The validation of the origin.
     */
    public checkUrl: string | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    public scope: string | undefined;

    /**
     * @Property sources: The list of origin URLs.
     */
    public sources: string | undefined;

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    public topLevelDomain: string | undefined;

    /**
     * Create a new `ALIYUN::CDN::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCname = ros.Token.asString(this.getAtt('Cname'));
        this.attrDomainName = ros.Token.asString(this.getAtt('DomainName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cdnType = props.cdnType;
        this.domainName = props.domainName;
        this.checkUrl = props.checkUrl;
        this.resourceGroupId = props.resourceGroupId;
        this.scope = props.scope;
        this.sources = props.sources;
        this.topLevelDomain = props.topLevelDomain;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cdnType: this.cdnType,
            domainName: this.domainName,
            checkUrl: this.checkUrl,
            resourceGroupId: this.resourceGroupId,
            scope: this.scope,
            sources: this.sources,
            topLevelDomain: this.topLevelDomain,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CDN::DomainConfig`
 */
export interface RosDomainConfigProps {

    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string;

    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    readonly functions: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the result of the validation.
 */
function RosDomainConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functions', ros.requiredValidator)(properties.functions));
    errors.collect(ros.propertyValidator('functions', ros.validateString)(properties.functions));
    errors.collect(ros.propertyValidator('domainNames', ros.requiredValidator)(properties.domainNames));
    errors.collect(ros.propertyValidator('domainNames', ros.validateString)(properties.domainNames));
    return errors.wrap('supplied properties not correct for "RosDomainConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig` resource.
 */
// @ts-ignore TS6133
function rosDomainConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainConfigPropsValidator(properties).assertSuccess();
    }
    return {
      DomainNames: ros.stringToRosTemplate(properties.domainNames),
      Functions: ros.stringToRosTemplate(properties.functions),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDN::DomainConfig`
 */
export class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DomainConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    public domainNames: string;

    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    public functions: string;

    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainNames = props.domainNames;
        this.functions = props.functions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainNames: this.domainNames,
            functions: this.functions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
