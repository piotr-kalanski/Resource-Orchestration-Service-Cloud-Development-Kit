using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.ResourceGroupProps")]
    public class ResourceGroupProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceGroupProps
    {
        /// <summary>Property displayName: The display name of the resource group.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DisplayName
        {
            get;
            set;
        }

        /// <summary>Property name: The unique identifier of the resource group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }
    }
}
