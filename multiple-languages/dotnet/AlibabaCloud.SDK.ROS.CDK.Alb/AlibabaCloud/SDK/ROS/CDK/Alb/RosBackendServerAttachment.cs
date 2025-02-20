using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>A ROS template type:  `ALIYUN::ALB::BackendServerAttachment`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosBackendServerAttachment), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosBackendServerAttachment", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosBackendServerAttachmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBackendServerAttachment : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ALB::BackendServerAttachment`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBackendServerAttachment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosBackendServerAttachmentProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerAttachment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerAttachment(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosBackendServerAttachment))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ServerGroupId: The ID of the server group.
        /// </remarks>
        [JsiiProperty(name: "attrServerGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServerGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupId: The ID of the server group.
        /// </remarks>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServerGroupId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: servers: The backend servers that you want to add to the server group. You can specify up to
        /// 40 servers in each call.
        /// </remarks>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Servers
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty")]
        public interface IServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverId: If the server group consists of servers, you can set this parameter to the ID of a
            /// resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
            /// (ENI), or an elastic container instance.
            /// If the server group consists of IP addresses, you can set this parameter to an IP
            /// address.
            /// </remarks>
            [JsiiProperty(name: "serverId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ServerId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverType: The type of the backend server. Valid values:
            /// Ecs: an ECS instance
            /// Eni: an ENI
            /// Eci: an elastic container instance
            /// Ip: an IP address
            /// </remarks>
            [JsiiProperty(name: "serverType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ServerType
            {
                get;
            }

            /// <remarks>
            /// <strong></strong>: -]){2,256}$/.
            ///
            /// <strong>Property</strong>: description: The description of the backend server. The description must be 2 to 256 characters
            /// in length, and can contain only the characters specified by the following expression:
            /// /^([^\x00-\xff]|[\w.,;/
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port that is used by the backend server. Valid values: 1 to 65535.
            /// Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serverIp: The IP address of the ENI in inclusive ENI mode.
            /// </remarks>
            [JsiiProperty(name: "serverIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ServerIp
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Weight
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosBackendServerAttachment.IServersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverId: If the server group consists of servers, you can set this parameter to the ID of a
                /// resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
                /// (ENI), or an elastic container instance.
                /// If the server group consists of IP addresses, you can set this parameter to an IP
                /// address.
                /// </remarks>
                [JsiiProperty(name: "serverId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ServerId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverType: The type of the backend server. Valid values:
                /// Ecs: an ECS instance
                /// Eni: an ENI
                /// Eci: an elastic container instance
                /// Ip: an IP address
                /// </remarks>
                [JsiiProperty(name: "serverType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ServerType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong></strong>: -]){2,256}$/.
                ///
                /// <strong>Property</strong>: description: The description of the backend server. The description must be 2 to 256 characters
                /// in length, and can contain only the characters specified by the following expression:
                /// /^([^\x00-\xff]|[\w.,;/
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port that is used by the backend server. Valid values: 1 to 65535.
                /// Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serverIp: The IP address of the ENI in inclusive ENI mode.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ServerIp
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Weight
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty")]
        public class ServersProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosBackendServerAttachment.IServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverId: If the server group consists of servers, you can set this parameter to the ID of a
            /// resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
            /// (ENI), or an elastic container instance.
            /// If the server group consists of IP addresses, you can set this parameter to an IP
            /// address.
            /// </remarks>
            [JsiiProperty(name: "serverId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverType: The type of the backend server. Valid values:
            /// Ecs: an ECS instance
            /// Eni: an ENI
            /// Eci: an elastic container instance
            /// Ip: an IP address
            /// </remarks>
            [JsiiProperty(name: "serverType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: -]){2,256}$/.
            ///
            /// <strong>Property</strong>: description: The description of the backend server. The description must be 2 to 256 characters
            /// in length, and can contain only the characters specified by the following expression:
            /// /^([^\x00-\xff]|[\w.,;/
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port that is used by the backend server. Valid values: 1 to 65535.
            /// Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverIp: The IP address of the ENI in inclusive ENI mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Weight
            {
                get;
                set;
            }
        }
    }
}
