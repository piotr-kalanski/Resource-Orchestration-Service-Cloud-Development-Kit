using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ALB::LoadBalancer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.LoadBalancerProps")]
    public class LoadBalancerProps : AlibabaCloud.SDK.ROS.CDK.Alb.ILoadBalancerProps
    {
        /// <summary>Property addressType: The type of IP address that the ALB instance uses to provide services.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AddressType
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerBillingConfig: The configuration of the billing method.</summary>
        [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
        public object LoadBalancerBillingConfig
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerEdition: The edition of the ALB instance.</summary>
        /// <remarks>
        /// Different editions have different limits and billing methods. Valid values:
        /// Basic: Basic Edition
        /// Standard: Standard Edition
        /// </remarks>
        [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerEdition
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerName: The name of the ALB instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerName
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property zoneMappings: The zones and the vSwitches in the zones.</summary>
        /// <remarks>
        /// You must specify at least two zones.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object ZoneMappings
        {
            get;
            set;
        }

        /// <summary>Property addressAllocatedMode: The mode in which IP addresses are assigned.</summary>
        /// <remarks>
        /// Valid values:
        /// Fixed: The ALB instance uses a static IP address.
        /// Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressAllocatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AddressAllocatedMode
        {
            get;
            set;
        }

        /// <summary>Property deletionProtectionEnabled: Specifies whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionProtectionEnabled
        {
            get;
            set;
        }

        /// <summary>Property modificationProtectionConfig: The configuration of modification protection.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
        public object? ModificationProtectionConfig
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
