using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>A ROS template type:  `ALIYUN::ESS::ScalingRule`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingRule), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosScalingRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ESS::ScalingRule`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosScalingRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingRuleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingRule(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleAri: Unique identifier of a scaling rule.
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleAri", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleAri
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleId
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
        /// <strong>Property</strong>: scalingGroupId: ID of the scaling group of a scaling rule.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ScalingGroupId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: adjustmentType: Adjustment mode of a scaling rule. Optional values:
        /// - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        /// - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        /// - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "adjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AdjustmentType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: adjustmentValue: Adjusted value of a scaling rule. Value range:
        /// - QuantityChangeInCapacity: [-500, 500]
        /// - PercentChangeInCapacity: [-100, 10000]
        /// - TotalCapacity: [0, 1000]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "adjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AdjustmentValue
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Cooldown
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DisableScaleIn
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        /// Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        /// Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "estimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EstimatedInstanceWarmup
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        /// Default value: the same as the value of MaxSize
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InitialMaxSize
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        /// Valid values of a target tracking scaling rule:
        /// - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
        /// - ClassicInternetTx: the average public network outbound traffic over the classic network
        /// - VpcInternetRx: the average public network inbound traffic over the VPC
        /// - VpcInternetTx: the average public network outbound traffic over the VPC
        /// - IntranetRx: the average internal network inbound traffic
        /// - IntranetTx: the average internal network outbound traffic
        /// Valid values of a predictive scaling rule:
        /// - CpuUtilization: the average CPU utilization
        /// - IntranetRx: the average internal network inbound traffic
        /// - IntranetTx: the average internal network outbound traffic
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MetricName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MinAdjustmentMagnitude
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
        /// - PredictAndScale: generates forecasts and creates forecast tasks.
        /// - PredictOnly: generates forecasts but does not create forecast tasks.
        /// Default value: PredictAndScale
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PredictiveScalingMode
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        /// Default value: 0
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PredictiveTaskBufferTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
        /// - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        /// - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        /// - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        /// Default value: MaxOverridePredictiveValue
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PredictiveValueBehavior
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        /// Default value: 0
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PredictiveValueBuffer
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleType: The type of the scaling rule. Valid values:
        /// - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        /// - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        /// - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        /// - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        /// If this parameter value is not specified, the default value is SimpleScalingRule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: stepAdjustment:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stepAdjustment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? StepAdjustment
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TargetValue
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IStepAdjustmentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty")]
        public interface IStepAdjustmentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: metricIntervalLowerBound: The lower limit value specified in step adjustment N.
            /// Valid values: -9.999999E18 to 9.999999E18.
            /// </remarks>
            [JsiiProperty(name: "metricIntervalLowerBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MetricIntervalLowerBound
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: metricIntervalUpperBound: The upper limit value specified in step adjustment N.
            /// Valid values: -9.999999E18 to 9.999999E18.
            /// </remarks>
            [JsiiProperty(name: "metricIntervalUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MetricIntervalUpperBound
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
            /// </remarks>
            [JsiiProperty(name: "scalingAdjustment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ScalingAdjustment
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IStepAdjustmentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingRule.IStepAdjustmentProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: metricIntervalLowerBound: The lower limit value specified in step adjustment N.
                /// Valid values: -9.999999E18 to 9.999999E18.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "metricIntervalLowerBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MetricIntervalLowerBound
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: metricIntervalUpperBound: The upper limit value specified in step adjustment N.
                /// Valid values: -9.999999E18 to 9.999999E18.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "metricIntervalUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MetricIntervalUpperBound
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scalingAdjustment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ScalingAdjustment
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty")]
        public class StepAdjustmentProperty : AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingRule.IStepAdjustmentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: metricIntervalLowerBound: The lower limit value specified in step adjustment N.
            /// Valid values: -9.999999E18 to 9.999999E18.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricIntervalLowerBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MetricIntervalLowerBound
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricIntervalUpperBound: The upper limit value specified in step adjustment N.
            /// Valid values: -9.999999E18 to 9.999999E18.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricIntervalUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MetricIntervalUpperBound
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingAdjustment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingAdjustment
            {
                get;
                set;
            }
        }
    }
}
