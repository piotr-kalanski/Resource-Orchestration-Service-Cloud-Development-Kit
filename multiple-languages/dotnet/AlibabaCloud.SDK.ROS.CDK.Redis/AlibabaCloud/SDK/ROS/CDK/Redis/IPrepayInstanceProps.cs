using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::PrepayInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IPrepayInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.PrepayInstanceProps")]
    public interface IPrepayInstanceProps
    {
        /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        /// true: Automatic payment is enabled. The payment is automatically made.
        /// Default is False
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewDuration: The auto-renewal period.</summary>
        /// <remarks>
        /// Valid values: 1 to 12.
        /// When the instance is about to expire, the instance is automatically renewed
        /// based on the number of months specified by this parameter.
        /// Note This parameter is valid only when ChargeType is set to PrePaid.
        /// </remarks>
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupPolicy: Backup policy.</summary>
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.BackupPolicyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.</summary>
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Capacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connections: Connection address.</summary>
        [JsiiProperty(name: "connections", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.ConnectionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Connections
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether destroy instance when it is in recycle.</summary>
        /// <remarks>
        /// Default is false
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: Engine version.</summary>
        /// <remarks>
        /// Supported values: 2.8, 4.0 and 5.0.
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property evictionPolicy: The eviction policy of cache data storage.</summary>
        [JsiiProperty(name: "evictionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EvictionPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceClass: Redis instance type.</summary>
        /// <remarks>
        /// Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceMaintainTime: Instance maintain time.</summary>
        [JsiiProperty(name: "instanceMaintainTime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.InstanceMaintainTimeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceMaintainTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The IDs of security groups.</summary>
        /// <remarks>
        /// Separate multiple security group IDs with commas (,) and up to 10 can be set.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sslEnabled: Modifies the SSL status.</summary>
        /// <remarks>
        /// Valid values:
        /// Disable: disables SSL encryption.
        /// Enable: enables SSL encryption.
        /// Update: updates the SSL certificate.
        /// </remarks>
        [JsiiProperty(name: "sslEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to redis.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Redis.RosPrepayInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id to create ecs instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
        /// <remarks>
        /// If set to:
        ///
        /// <list type="bullet">
        /// <description>true: enables password free.</description>
        /// <description>false: disables password free.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcPasswordFree
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create ecs instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone id of input region.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::REDIS::PrepayInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrepayInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.PrepayInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IPrepayInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
            /// true: Automatic payment is enabled. The payment is automatically made.
            /// Default is False
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewDuration: The auto-renewal period.</summary>
            /// <remarks>
            /// Valid values: 1 to 12.
            /// When the instance is about to expire, the instance is automatically renewed
            /// based on the number of months specified by this parameter.
            /// Note This parameter is valid only when ChargeType is set to PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupPolicy: Backup policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.BackupPolicyProperty\"}]}}", isOptional: true)]
            public object? BackupPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Capacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connections: Connection address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connections", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.ConnectionsProperty\"}]}}", isOptional: true)]
            public object? Connections
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether destroy instance when it is in recycle.</summary>
            /// <remarks>
            /// Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: Engine version.</summary>
            /// <remarks>
            /// Supported values: 2.8, 4.0 and 5.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property evictionPolicy: The eviction policy of cache data storage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "evictionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EvictionPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceClass: Redis instance type.</summary>
            /// <remarks>
            /// Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceMaintainTime: Instance maintain time.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceMaintainTime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.InstanceMaintainTimeProperty\"}]}}", isOptional: true)]
            public object? InstanceMaintainTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The IDs of security groups.</summary>
            /// <remarks>
            /// Separate multiple security group IDs with commas (,) and up to 10 can be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sslEnabled: Modifies the SSL status.</summary>
            /// <remarks>
            /// Valid values:
            /// Disable: disables SSL encryption.
            /// Enable: enables SSL encryption.
            /// Update: updates the SSL certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sslEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SslEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to redis.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-redis.RosPrepayInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Redis.RosPrepayInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.RosPrepayInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The VPC id to create ecs instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
            /// <remarks>
            /// If set to:
            ///
            /// <list type="bullet">
            /// <description>true: enables password free.</description>
            /// <description>false: disables password free.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcPasswordFree
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch Id to create ecs instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone id of input region.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
