using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS template type:  `ALIYUN::FC::Trigger`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosTrigger), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosTrigger", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosTriggerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosTrigger : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::FC::Trigger`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosTrigger(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IRosTriggerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTrigger(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTrigger(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosTrigger))!;

        /// <remarks>
        /// <strong>Attribute</strong>: FunctionName: Function name.
        /// </remarks>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrFunctionName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceName: Service name.
        /// </remarks>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: TriggerId: The trigger ID.
        /// </remarks>
        [JsiiProperty(name: "attrTriggerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTriggerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: TriggerName: Trigger name.
        /// </remarks>
        [JsiiProperty(name: "attrTriggerName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTriggerName
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
        /// <strong>Property</strong>: functionName: Function name.
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object FunctionName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServiceName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public virtual object TriggerConfig
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerName: Trigger name.
        /// Example : "image_resize"
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TriggerName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        /// Example : "oss"
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TriggerType
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        /// Example : "acs:ram::1234567890:role/fc-test"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "invocationRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InvocationRole
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: service version or alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Qualifier
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        /// Example : "acs:oss:cn-shanghai:12345:mybucket"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SourceArn
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
    }
}
