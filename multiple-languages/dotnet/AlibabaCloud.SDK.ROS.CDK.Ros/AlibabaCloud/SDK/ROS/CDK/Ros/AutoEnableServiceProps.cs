using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::AutoEnableService`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.AutoEnableServiceProps")]
    public class AutoEnableServiceProps : AlibabaCloud.SDK.ROS.CDK.Ros.IAutoEnableServiceProps
    {
        /// <summary>Property serviceName: Which service to enable.</summary>
        /// <remarks>
        /// Valid values:
        /// AHAS: Application High Availability Service
        /// ARMS: Realtime Monitoring Service
        /// ApiGateway: API Gateway
        /// BatchCompute: Batch Compute
        /// BrainIndustrial: Brain Industrial
        /// CloudStorageGateway: Cloud Storage Gateway
        /// CMS: Cloud Monitor Service
        /// CR: Container Registry
        /// CS: Container Service
        /// DataHub: Data Hub
        /// DataWorks: DataWorks
        /// DCDN: Dynamic Route for CDN
        /// EDAS: Enterprise Distributed Application Service
        /// EMAS: Enterprise Mobile Application Studio
        /// FC: Function Compute
        /// FNF: Serverless Workflow
        /// MaxCompute: MaxCompute
        /// NAS: Network Attached Storage
        /// MNS: Message Service (MNS)
        /// HBR: Hybrid Backup Recovery
        /// IMM: Intelligent Media Management
        /// IOT: IoT Platform
        /// KMS: Key Management Service
        /// NLP: Natural Language Processing
        /// OSS: Object Storage Service
        /// OTS: Table Store
        /// PrivateLink: Private Link
        /// PrivateZone: Private Zone
        /// RocketMQ: RocketMQ
        /// SAE: Serverless App Engine
        /// SLS: Log Service
        /// TrafficMirror: VPC Traffic Mirroring
        /// VS: Video Surveillance
        /// Xtrace: Tracing Anlaysis
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceName
        {
            get;
            set;
        }
    }
}
