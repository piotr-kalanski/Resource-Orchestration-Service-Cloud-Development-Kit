using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Logstore`.</summary>
    [JsiiInterface(nativeType: typeof(ILogstoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.LogstoreProps")]
    public interface ILogstoreProps
    {
        /// <summary>Property logstoreName: Logstore name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogstoreName
        {
            get;
        }

        /// <summary>Property projectName: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "appendMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppendMeta
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoSplit: Whether to automatically split the shard.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "autoSplit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoSplit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "enableTracking", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableTracking
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptConf: Data encryption config.</summary>
        [JsiiProperty(name: "encryptConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptConf
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxSplitShard: The maximum number of shards when splitting automatically.</summary>
        /// <remarks>
        /// Must be specified if AutoSplit is set to true.
        /// Allowed Values: 1-64.
        /// </remarks>
        [JsiiProperty(name: "maxSplitShard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxSplitShard
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preserveStorage: Whether to keep the log permanently.</summary>
        /// <remarks>
        /// If set to true, TTL will be ignored.
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "preserveStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreserveStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shardCount: The number of Shards.</summary>
        /// <remarks>
        /// Allowed Values: 1-100, default to 2.
        /// </remarks>
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShardCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ttl: The lifecycle of log in the logstore in days.</summary>
        /// <remarks>
        /// Allowed Values: 1-3600, default to 30.
        /// </remarks>
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ttl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Logstore`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILogstoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.LogstoreProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.ILogstoreProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property logstoreName: Logstore name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogstoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: Project name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.</summary>
            /// <remarks>
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appendMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppendMeta
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoSplit: Whether to automatically split the shard.</summary>
            /// <remarks>
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoSplit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoSplit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.</summary>
            /// <remarks>
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableTracking", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableTracking
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptConf: Data encryption config.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty\"}]}}", isOptional: true)]
            public object? EncryptConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxSplitShard: The maximum number of shards when splitting automatically.</summary>
            /// <remarks>
            /// Must be specified if AutoSplit is set to true.
            /// Allowed Values: 1-64.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSplitShard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxSplitShard
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preserveStorage: Whether to keep the log permanently.</summary>
            /// <remarks>
            /// If set to true, TTL will be ignored.
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preserveStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreserveStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property shardCount: The number of Shards.</summary>
            /// <remarks>
            /// Allowed Values: 1-100, default to 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShardCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ttl: The lifecycle of log in the logstore in days.</summary>
            /// <remarks>
            /// Allowed Values: 1-3600, default to 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ttl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
