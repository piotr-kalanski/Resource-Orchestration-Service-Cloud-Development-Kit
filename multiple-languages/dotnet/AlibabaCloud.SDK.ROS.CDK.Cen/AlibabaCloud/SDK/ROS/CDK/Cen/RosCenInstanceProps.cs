using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenInstanceProps")]
    public class RosCenInstanceProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: The description of the instance.
        /// The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the instance.
        /// The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protectionLevel: The level of CIDR block overlapping.
        /// Set the value to REDUCED. REDUCED indicates that the
        /// CIDR blocks can overlap with each other but must not be the same.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectionLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProtectionLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosCenInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cen.RosCenInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
