using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::DeploymentSet`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.DeploymentSetProps")]
    public class DeploymentSetProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSetProps
    {
        /// <summary>Property deploymentSetName: The name of the deployment set.</summary>
        /// <remarks>
        /// It must be 2 to 128 characters in length. It must
        /// start with a letter and cannot start with http:// or https://. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeploymentSetName
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the deployment set.</summary>
        /// <remarks>
        /// It must be 2 to 256 characters in length. It
        /// cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.</summary>
        /// <remarks>
        /// Valid values:
        /// CancelMembershipAndStart: restarts the instances immediately after they are shut down
        /// and migrated to other deployment sets. This is the default value.
        /// KeepStopped: keeps the instances shut down and restarts them after the deployment
        /// set is replenished.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "onUnableToRedeployFailedInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OnUnableToRedeployFailedInstance
        {
            get;
            set;
        }
    }
}
