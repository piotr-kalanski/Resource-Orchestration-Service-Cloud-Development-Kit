using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.DomainConfigProps")]
    public class DomainConfigProps : AlibabaCloud.SDK.ROS.CDK.Cdn.IDomainConfigProps
    {
        /// <summary>Property domainNames: Your accelerated domain name, separated by commas in English.</summary>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainNames
        {
            get;
            set;
        }

        /// <summary>Property functions: function list, please refer to the CDN documentation for details.</summary>
        [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Functions
        {
            get;
            set;
        }
    }
}
