using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.FunctionInvokerProps")]
    public class FunctionInvokerProps : AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FunctionName
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceName
        {
            get;
            set;
        }

        /// <summary>Property async: Invocation type, Sync or Async.</summary>
        /// <remarks>
        /// Defaults to Sync.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Async
        {
            get;
            set;
        }

        /// <summary>Property checkError: Whether check error for function invocation result.</summary>
        /// <remarks>
        /// If set true and function invocation result has error, the resource creation will be regard as failed.
        /// Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CheckError
        {
            get;
            set;
        }

        /// <summary>Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "event", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Event
        {
            get;
            set;
        }

        /// <summary>Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.</summary>
        /// <remarks>
        /// The change of the property leads to the invoke of the function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "executeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExecuteVersion
        {
            get;
            set;
        }

        /// <summary>Property qualifier: service version, can be versionId or aliasName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Qualifier
        {
            get;
            set;
        }

        /// <summary>Property serviceRegionId: Which region service belongs to.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serviceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceRegionId
        {
            get;
            set;
        }
    }
}
