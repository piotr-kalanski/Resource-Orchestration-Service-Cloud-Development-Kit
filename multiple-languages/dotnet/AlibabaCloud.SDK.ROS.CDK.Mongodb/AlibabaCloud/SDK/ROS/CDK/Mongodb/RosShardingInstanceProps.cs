using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MONGODB::ShardingInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mongodb.RosShardingInstanceProps")]
    public class RosShardingInstanceProps : AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosShardingInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configServer:
        /// </remarks>
        [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object ConfigServer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mongos:
        /// </remarks>
        [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Mongos
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicaSet:
        /// </remarks>
        [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object ReplicaSet
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceDescription: Description of created database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbInstanceDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EngineVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetworkType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProtocolType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RestoreTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpArray: Security ips to add or remove.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityIpArray
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: srcDbInstanceId: Create an instance of the backup set based on an instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SrcDbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StorageEngine
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Mongodb.RosShardingInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        /// true: enable TDE
        /// false: disable TDE (default)
        /// Note: You cannot disable TDE after it is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TdeStatus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id to create mongodb instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create mongodb instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
