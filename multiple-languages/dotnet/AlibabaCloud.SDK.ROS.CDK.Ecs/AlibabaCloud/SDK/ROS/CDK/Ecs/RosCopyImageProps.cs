using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::CopyImage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosCopyImageProps")]
    public class RosCopyImageProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosCopyImageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destinationRegionId: ID of the region to where the destination custom image belongs.
        /// </remarks>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestinationRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: ID of the source custom image.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DestinationDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DestinationImageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encrypted: Whether to encrypt the image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Encrypted
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: kmsKeyId: The ID of the key used to encrypt the image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KmsKeyId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the image copy belongs. If not provided, the image copy belongs to the default resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceRegionId: ID of the region to where the source image belongs. Default is current region ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tag:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Tag
        {
            get;
            set;
        }
    }
}
