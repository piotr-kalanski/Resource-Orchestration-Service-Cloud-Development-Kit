using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GWS::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gws.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Gws.IClusterProps
    {
        /// <summary>Property clusterType: Cluster Type: gws.s1.standard.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterType
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC id.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property name: Cluster name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property policy: Cluster policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosCluster.PolicyProperty\"}]}}", isOptional: true)]
        public object? Policy
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }
    }
}
