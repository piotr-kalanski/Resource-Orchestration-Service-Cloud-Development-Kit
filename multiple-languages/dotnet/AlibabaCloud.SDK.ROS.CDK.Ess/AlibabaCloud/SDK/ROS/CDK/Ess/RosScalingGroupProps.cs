using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingGroupProps")]
    public class RosScalingGroupProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "maxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MaxSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "minSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MinSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbInstanceIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        /// The default value is 300s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DefaultCooldown
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DesiredCapacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupDeletionProtection: Whether to enable deletion protection for scaling group.
        /// Default to False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GroupDeletionProtection
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LaunchTemplateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template. Valid values:
        /// A fixed template version numbe.
        /// Default: The default template version is always used.
        /// Latest: The latest template version is always used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LaunchTemplateVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoadBalancerIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
        /// 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        /// 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MultiAzPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? NotificationConfigurations
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protectedInstances: ECS instances of protected mode in the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProtectedInstances
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: removalPolicys: Policy for removing ECS instances from the scaling group.
        /// Optional values:
        /// OldestInstance: removes the first ECS instance attached to the scaling group.
        /// NewestInstance: removes the first ECS instance attached to the scaling group.
        /// OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        /// Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemovalPolicys
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        /// If this parameter is not specified, the default value is ScalingGroupId.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: standbyInstances: ECS instances of standby mode in the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StandbyInstances
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        /// The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
        /// The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
        /// When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchIds
        {
            get;
            set;
        }
    }
}
