using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::EIPSegment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosEIPSegmentProps")]
    public class RosEIPSegmentProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosEIPSegmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: eipMask: The mask of the contiguous EIP group. Valid values:
        /// 28: 16 contiguous EIPs are allocated for one call.
        /// 27: 32 contiguous EIPs are allocated for one call.
        /// 26: 64 contiguous EIPs are allocated for one call.
        /// 25: 128 contiguous EIPs are allocated for one call.
        /// 24: 256 contiguous EIPs are allocated for one call.
        /// Note The actual number of assigned EIPs may be less than the expected number because one,
        /// three, or four EIPs may be reserved.
        /// </remarks>
        [JsiiProperty(name: "eipMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EipMask
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: The metering method of the contiguous EIPs. Valid values:
        /// PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
        /// PayByTraffic: Fees are charged based on data transfer.
        /// Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: netmode: The network type. Valid values:
        /// public: the Internet. This is the default value. After contiguous EIPs are associated with
        /// cloud resources, the cloud resources can access the Internet by using the EIPs.
        /// hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
        /// cloud resources can access the hybrid cloud by using the EIPs.
        /// Note This network type is available only to users who are added to the whitelist. To use
        /// this network type, contact your customer manager.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "netmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Netmode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the EIPs belong.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }
    }
}
