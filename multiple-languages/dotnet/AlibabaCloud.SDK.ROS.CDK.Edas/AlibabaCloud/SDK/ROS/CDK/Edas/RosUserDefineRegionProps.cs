using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosUserDefineRegionProps")]
    public class RosUserDefineRegionProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosUserDefineRegionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regionName: Logical region (or namespace) name
        /// </remarks>
        [JsiiProperty(name: "regionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RegionName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
        /// </remarks>
        [JsiiProperty(name: "regionTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RegionTag
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: debugEnable: Whether debug is enable
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DebugEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Logic region (or namespace) description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
