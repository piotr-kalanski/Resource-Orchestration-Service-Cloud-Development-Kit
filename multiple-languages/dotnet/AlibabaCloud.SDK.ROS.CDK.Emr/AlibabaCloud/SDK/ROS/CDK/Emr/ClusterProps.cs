using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EMR::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Emr.IClusterProps
    {
        /// <summary>Property chargeType: The billing method.</summary>
        /// <remarks>
        /// Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        /// subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
        }

        /// <summary>Property clusterType: The type of the cluster.</summary>
        /// <remarks>
        /// Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterType
        {
            get;
            set;
        }

        /// <summary>Property emrVer: The version of EMR.</summary>
        [JsiiProperty(name: "emrVer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EmrVer
        {
            get;
            set;
        }

        /// <summary>Property hostGroup:.</summary>
        [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object HostGroup
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the cluster.</summary>
        /// <remarks>
        /// The name can be 1 to 64 characters in length and only contain
        /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property netType: The type of the network.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetType
        {
            get;
            set;
        }

        /// <summary>Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.</summary>
        [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UseLocalMetaDb
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The zone ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ZoneId
        {
            get;
            set;
        }

        /// <summary>Property authorizeContent: Not required.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "authorizeContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthorizeContent
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Indicates whether the subscription cluster is auto-renewed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property bootstrapAction:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? BootstrapAction
        {
            get;
            set;
        }

        /// <summary>Property config:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Config
        {
            get;
            set;
        }

        /// <summary>Property configurations: Not required.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "configurations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Configurations
        {
            get;
            set;
        }

        /// <summary>Property depositType: The hosting type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "depositType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DepositType
        {
            get;
            set;
        }

        /// <summary>Property easEnable: Indicates whether the cluster is a high-security cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EasEnable
        {
            get;
            set;
        }

        /// <summary>Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.</summary>
        /// <remarks>
        /// A value of true indicates
        /// that two master nodes are required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HighAvailabilityEnable
        {
            get;
            set;
        }

        /// <summary>Property initCustomHiveMetaDb: A reserved parameter.</summary>
        /// <remarks>
        /// Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InitCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <summary>Property instanceGeneration: The generation of the ECS instances.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceGeneration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceGeneration
        {
            get;
            set;
        }

        /// <summary>Property ioOptimized: Indicates wether I/O optimization is enabled.</summary>
        /// <remarks>
        /// Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <summary>Property isOpenPublicIp: Indicates whether a public IP address is assigned.</summary>
        /// <remarks>
        /// A value of true indicates that
        /// a bandwidth of 8 MB is set by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IsOpenPublicIp
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: The name of the key pair.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property logPath: The log path in OSS.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "logPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogPath
        {
            get;
            set;
        }

        /// <summary>Property machineType: The type of the machine.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "machineType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MachineType
        {
            get;
            set;
        }

        /// <summary>Property masterPwd: The SSH password for the master node.</summary>
        /// <remarks>
        /// The password must meet the following requirements.
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

        /// <summary>Property metaStoreConf: Meta store conf of specific meta store type.</summary>
        /// <remarks>
        /// If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MetaStoreConf
        {
            get;
            set;
        }

        /// <summary>Property metaStoreType: Meta store type.</summary>
        /// <remarks>
        /// Allow types:
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

        /// <summary>Property optionSoftWareList: The list of optional services.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? OptionSoftWareList
        {
            get;
            set;
        }

        /// <summary>Property period: The length of the subscription.</summary>
        /// <remarks>
        /// Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "relatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RelatedClusterId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: The ID of the security group.</summary>
        /// <remarks>
        /// You can create a security group in the ECS console and
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

        /// <summary>Property securityGroupName: The name of the security group to create.</summary>
        /// <remarks>
        /// If the ID of the security group is not specified,
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

        /// <summary>Property sshEnable: Indicates whether SSH is enabled.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SshEnable
        {
            get;
            set;
        }

        /// <summary>Property useCustomHiveMetaDb: A reserved parameter.</summary>
        /// <remarks>
        /// Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UseCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <summary>Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserDefinedEmrEcsRole
        {
            get;
            set;
        }

        /// <summary>Property userInfo:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? UserInfo
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        /// <remarks>
        /// A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The ID of the Vswitch.</summary>
        /// <remarks>
        /// A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property whiteListType: Not required.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "whiteListType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WhiteListType
        {
            get;
            set;
        }
    }
}
