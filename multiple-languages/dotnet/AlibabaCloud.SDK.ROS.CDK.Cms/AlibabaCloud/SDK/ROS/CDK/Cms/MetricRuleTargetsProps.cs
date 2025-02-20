using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.MetricRuleTargetsProps")]
    public class MetricRuleTargetsProps : AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTargetsProps
    {
        /// <summary>Property ruleId: The ID of the alert rule.</summary>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleId
        {
            get;
            set;
        }

        /// <summary>Property targets: undefined.</summary>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Targets
        {
            get;
            set;
        }
    }
}
