using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosTrafficControlProps")]
    public class RosTrafficControlProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiDefault: Default API traffic value.
        /// </remarks>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiDefault
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficControlName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        /// </remarks>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficControlUnit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appDefault: Default APP traffic value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AppDefault
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: special: Special traffic controls.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Special
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefault: Default user traffic value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserDefault
        {
            get;
            set;
        }
    }
}
