using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Asm
{
    /// <summary>A ROS template type:  `ALIYUN::ASM::ServiceMesh`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMesh", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMeshProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosServiceMesh : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ASM::ServiceMesh`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosServiceMesh(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Asm.IRosServiceMeshProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosServiceMesh(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosServiceMesh(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceMeshId: The ID of the ASM instance.
        /// </remarks>
        [JsiiProperty(name: "attrServiceMeshId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceMeshId
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
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC).
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpcId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
        /// </remarks>
        [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VSwitches
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: apiServerPublicEip: Specifies whether to expose the API server to the Internet.
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, the API server of clusters added to the ASM instance
        /// cannot be accessed from the Internet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "apiServerPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ApiServerPublicEip
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: auditProject: The name of the Log Service project that is used for mesh audit.
        /// Default value: mesh-log-{meshId}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AuditProject
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: customizedZipkin: Specifies whether to use a user-created Zipkin system.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CustomizedZipkin
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
        /// that you have activated Alibaba Cloud Log Service.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableAudit
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
        /// to access external services.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IncludeIpRanges
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: istioVersion: The Istio version of the ASM instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IstioVersion
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LocalityLoadBalancing
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the ASM instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Name
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: opa: OPA settings.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
        public virtual object? Opa
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? OutboundTrafficPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, only clusters in the same VPC as the ASM instance
        /// can access Istio Pilot of the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pilotPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PilotPublicEip
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: proxy: Proxy settings.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
        public virtual object? Proxy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Telemetry
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: traceSampling: The sampling percentage of tracing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TraceSampling
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
        /// that you have activated Alibaba Cloud Tracing Analysis.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Tracing
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IOPAProperty), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty")]
        public interface IOPAProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: opaLimitCpu: The limit on the CPU of the OPA container.
            /// </remarks>
            [JsiiProperty(name: "opaLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpaLimitCpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: opaLimitMemory: The limit on the memory size of the OPA container.
            /// </remarks>
            [JsiiProperty(name: "opaLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpaLimitMemory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: opaLogLevel: The log level of the OPA container.
            /// </remarks>
            [JsiiProperty(name: "opaLogLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpaLogLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: opaRequestCpu: The number of CPU cores requested by the OPA container.
            /// </remarks>
            [JsiiProperty(name: "opaRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpaRequestCpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: opaRequestMemory: The size of the memory requested by the OPA container.
            /// </remarks>
            [JsiiProperty(name: "opaRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpaRequestMemory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: openAgentPolicy: Specifies whether to enable the Open Policy Agent (OPA) plug-in.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiProperty(name: "openAgentPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OpenAgentPolicy
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IOPAProperty), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh.IOPAProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: opaLimitCpu: The limit on the CPU of the OPA container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "opaLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpaLimitCpu
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: opaLimitMemory: The limit on the memory size of the OPA container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "opaLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpaLimitMemory
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: opaLogLevel: The log level of the OPA container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "opaLogLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpaLogLevel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: opaRequestCpu: The number of CPU cores requested by the OPA container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "opaRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpaRequestCpu
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: opaRequestMemory: The size of the memory requested by the OPA container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "opaRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpaRequestMemory
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: openAgentPolicy: Specifies whether to enable the Open Policy Agent (OPA) plug-in.
                /// Valid values: true and false. Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "openAgentPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OpenAgentPolicy
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty")]
        public class OPAProperty : AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh.IOPAProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: opaLimitCpu: The limit on the CPU of the OPA container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaLimitCpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: opaLimitMemory: The limit on the memory size of the OPA container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaLimitMemory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: opaLogLevel: The log level of the OPA container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaLogLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaLogLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: opaRequestCpu: The number of CPU cores requested by the OPA container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaRequestCpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: opaRequestMemory: The size of the memory requested by the OPA container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaRequestMemory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: openAgentPolicy: Specifies whether to enable the Open Policy Agent (OPA) plug-in.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "openAgentPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpenAgentPolicy
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IProxyProperty), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty")]
        public interface IProxyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: clusterDomain: The domain name of the cluster.
            /// </remarks>
            [JsiiProperty(name: "clusterDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ClusterDomain
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyLimitCpu: The limit on the CPU of the sidecar.
            /// </remarks>
            [JsiiProperty(name: "proxyLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ProxyLimitCpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyLimitMemory: The limit on the memory size of the sidecar.
            /// </remarks>
            [JsiiProperty(name: "proxyLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ProxyLimitMemory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyRequestCpu: The number of CPU cores requested by the sidecar.
            /// </remarks>
            [JsiiProperty(name: "proxyRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ProxyRequestCpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyRequestMemory: The size of the memory requested by the sidecar.
            /// </remarks>
            [JsiiProperty(name: "proxyRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ProxyRequestMemory
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IProxyProperty), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh.IProxyProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: clusterDomain: The domain name of the cluster.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "clusterDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ClusterDomain
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: proxyLimitCpu: The limit on the CPU of the sidecar.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "proxyLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ProxyLimitCpu
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: proxyLimitMemory: The limit on the memory size of the sidecar.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "proxyLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ProxyLimitMemory
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: proxyRequestCpu: The number of CPU cores requested by the sidecar.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "proxyRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ProxyRequestCpu
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: proxyRequestMemory: The size of the memory requested by the sidecar.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "proxyRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ProxyRequestMemory
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty")]
        public class ProxyProperty : AlibabaCloud.SDK.ROS.CDK.Asm.RosServiceMesh.IProxyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: clusterDomain: The domain name of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterDomain
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyLimitCpu: The limit on the CPU of the sidecar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyLimitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyLimitCpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyLimitMemory: The limit on the memory size of the sidecar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyLimitMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyLimitMemory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyRequestCpu: The number of CPU cores requested by the sidecar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyRequestCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyRequestCpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyRequestMemory: The size of the memory requested by the sidecar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyRequestMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyRequestMemory
            {
                get;
                set;
            }
        }
    }
}
