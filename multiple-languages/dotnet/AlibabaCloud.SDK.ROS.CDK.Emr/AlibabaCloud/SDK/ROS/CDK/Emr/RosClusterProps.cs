using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EMR::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Emr.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        /// subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: emrVer: The version of EMR.
        /// </remarks>
        [JsiiProperty(name: "emrVer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EmrVer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostGroup:
        /// </remarks>
        [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object HostGroup
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: The type of the network.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        /// </remarks>
        [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UseLocalMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: authorizeContent: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authorizeContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthorizeContent
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bootstrapAction:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? BootstrapAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: config:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Config
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: configurations: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configurations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Configurations
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: depositType: The hosting type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "depositType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DepositType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: easEnable: Indicates whether the cluster is a high-security cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EasEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        /// that two master nodes are required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HighAvailabilityEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: initCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InitCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceGeneration: The generation of the ECS instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceGeneration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceGeneration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        /// a bandwidth of 8 MB is set by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IsOpenPublicIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: The name of the key pair.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logPath: The log path in OSS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogPath
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: machineType: The type of the machine.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "machineType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MachineType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterPwd: The SSH password for the master node. The password must meet the following requirements.
        /// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        /// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        /// and special symbols).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterPwd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MasterPwd
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MetaStoreConf
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreType: Meta store type. Allow types:
        /// local: Local cluster
        /// unified: Unified meta data
        /// user_rds: User's RDS
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MetaStoreType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: optionSoftWareList: The list of optional services.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? OptionSoftWareList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "relatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RelatedClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        /// use it. Note: If you use an existing security group, the default security group policy
        /// is applied to this security group: Only port 22 is open at the inbound and all ports
        /// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        /// this name is used to create a new security group. After the cluster is created, you
        /// can view the ID of the security group on the Cluster Management page. The default
        /// security group policy is applied to this security group: Only port 22 is open at the
        /// inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        /// or SecurityGroupName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sshEnable: Indicates whether SSH is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SshEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: useCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UseCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserDefinedEmrEcsRole
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userInfo:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? UserInfo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: whiteListType: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "whiteListType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WhiteListType
        {
            get;
            set;
        }
    }
}
