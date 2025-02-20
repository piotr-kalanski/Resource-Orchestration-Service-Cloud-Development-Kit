using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.ScalingRuleProps")]
    public class ScalingRuleProps : AlibabaCloud.SDK.ROS.CDK.Ess.IScalingRuleProps
    {
        /// <summary>Property scalingGroupId: ID of the scaling group of a scaling rule.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ScalingGroupId
        {
            get;
            set;
        }

        /// <summary>Property adjustmentType: Adjustment mode of a scaling rule.</summary>
        /// <remarks>
        /// Optional values:
        ///
        /// <list type="bullet">
        /// <description>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</description>
        /// <description>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</description>
        /// <description>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "adjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AdjustmentType
        {
            get;
            set;
        }

        /// <summary>Property adjustmentValue: Adjusted value of a scaling rule.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description>QuantityChangeInCapacity: [-500, 500]</description>
        /// <description>PercentChangeInCapacity: [-100, 10000]</description>
        /// <description>TotalCapacity: [0, 1000]</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "adjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AdjustmentValue
        {
            get;
            set;
        }

        /// <summary>Property cooldown: Cool-down time of a scaling rule.</summary>
        /// <remarks>
        /// Value range: [0, 86,400], in seconds. The default value is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Cooldown
        {
            get;
            set;
        }

        /// <summary>Property disableScaleIn: Specifies whether to disable scale-in.</summary>
        /// <remarks>
        /// This parameter is applicable only to target tracking scaling rules.
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DisableScaleIn
        {
            get;
            set;
        }

        /// <summary>Property estimatedInstanceWarmup: The warm-up period of the ECS instances.</summary>
        /// <remarks>
        /// This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        /// Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        /// Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "estimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EstimatedInstanceWarmup
        {
            get;
            set;
        }

        /// <summary>Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.</summary>
        /// <remarks>
        /// Default value: the same as the value of MaxSize
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InitialMaxSize
        {
            get;
            set;
        }

        /// <summary>Property metricName: The predefined metric to monitor.</summary>
        /// <remarks>
        /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        /// Valid values of a target tracking scaling rule:
        ///
        /// <list type="bullet">
        /// <description>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</description>
        /// <description>ClassicInternetTx: the average public network outbound traffic over the classic network</description>
        /// <description>VpcInternetRx: the average public network inbound traffic over the VPC</description>
        /// <description>VpcInternetTx: the average public network outbound traffic over the VPC</description>
        /// <description>IntranetRx: the average internal network inbound traffic</description>
        /// <description>IntranetTx: the average internal network outbound traffic
        /// Valid values of a predictive scaling rule:</description>
        /// <description>CpuUtilization: the average CPU utilization</description>
        /// <description>IntranetRx: the average internal network inbound traffic</description>
        /// <description>IntranetTx: the average internal network outbound traffic</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MetricName
        {
            get;
            set;
        }

        /// <summary>Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.</summary>
        /// <remarks>
        /// This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MinAdjustmentMagnitude
        {
            get;
            set;
        }

        /// <summary>Property predictiveScalingMode: The mode of the predictive scaling rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>PredictAndScale: generates forecasts and creates forecast tasks.</description>
        /// <description>PredictOnly: generates forecasts but does not create forecast tasks.
        /// Default value: PredictAndScale</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PredictiveScalingMode
        {
            get;
            set;
        }

        /// <summary>Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.</summary>
        /// <remarks>
        /// By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        /// Default value: 0
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PredictiveTaskBufferTime
        {
            get;
            set;
        }

        /// <summary>Property predictiveValueBehavior: The action taken on the predicted maximum value.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        ///
        /// <list type="bullet">
        /// <description>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</description>
        /// <description>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        /// Default value: MaxOverridePredictiveValue</description>
        /// </list></description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PredictiveValueBehavior
        {
            get;
            set;
        }

        /// <summary>Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
        /// <remarks>
        /// When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        /// Default value: 0
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "predictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PredictiveValueBuffer
        {
            get;
            set;
        }

        /// <summary>Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.</summary>
        /// <remarks>
        /// It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingRuleName
        {
            get;
            set;
        }

        /// <summary>Property scalingRuleType: The type of the scaling rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</description>
        /// <description>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</description>
        /// <description>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</description>
        /// <description>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        /// If this parameter value is not specified, the default value is SimpleScalingRule.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingRuleType
        {
            get;
            set;
        }

        /// <summary>Property stepAdjustment:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "stepAdjustment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? StepAdjustment
        {
            get;
            set;
        }

        /// <summary>Property targetValue: The target value of a metric.</summary>
        /// <remarks>
        /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TargetValue
        {
            get;
            set;
        }
    }
}
