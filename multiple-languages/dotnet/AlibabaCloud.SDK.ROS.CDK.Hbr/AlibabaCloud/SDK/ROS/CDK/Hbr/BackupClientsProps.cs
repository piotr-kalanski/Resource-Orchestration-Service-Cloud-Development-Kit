using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::BackupClients`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.BackupClientsProps")]
    public class BackupClientsProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IBackupClientsProps
    {
        /// <summary>Property instanceIds: ID list of instances to install backup client.</summary>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object InstanceIds
        {
            get;
            set;
        }
    }
}
