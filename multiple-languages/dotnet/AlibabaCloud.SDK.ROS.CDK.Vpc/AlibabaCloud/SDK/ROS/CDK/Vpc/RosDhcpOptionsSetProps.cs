using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::DhcpOptionsSet`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetProps")]
    public class RosDhcpOptionsSetProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosDhcpOptionsSetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetDescription: The description of the DHCP options set.
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dhcpOptionsSetDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DhcpOptionsSetDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetName: The name of the DHCP options set.
        /// The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dhcpOptionsSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DhcpOptionsSetName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The root domain, for example, example.com.
        /// After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "domainNameServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DomainNameServers
        {
            get;
            set;
        }
    }
}
