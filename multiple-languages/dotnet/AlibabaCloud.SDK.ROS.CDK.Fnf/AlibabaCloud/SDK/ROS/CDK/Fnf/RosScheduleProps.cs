using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FNF::Schedule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fnf.RosScheduleProps")]
    public class RosScheduleProps : AlibabaCloud.SDK.ROS.CDK.Fnf.IRosScheduleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cronExpression: Cron expression.
        /// </remarks>
        [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CronExpression
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: flowName: Flow name.
        /// </remarks>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FlowName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduleName: Schedule name.
        /// </remarks>
        [JsiiProperty(name: "scheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ScheduleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the schedule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Whether enable schedule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Enable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payload: Payload.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Payload
        {
            get;
            set;
        }
    }
}
