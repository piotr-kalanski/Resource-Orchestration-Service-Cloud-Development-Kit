using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosContactProps")]
    public class RosContactProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: channels: undefined
        /// </remarks>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Channels
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alarm contact.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContactName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Describe
        {
            get;
            set;
        }
    }
}
