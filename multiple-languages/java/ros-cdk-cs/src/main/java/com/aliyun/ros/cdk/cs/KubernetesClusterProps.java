package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.177Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.KubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(KubernetesClusterProps.Jsii$Proxy.class)
public interface KubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property masterInstanceTypes: Master node ECS specification type code.
     * <p>
     * For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterInstanceTypes();

    /**
     * Property masterVSwitchIds: Master node switch ID.
     * <p>
     * To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterVSwitchIds();

    /**
     * Property name: The name of the cluster.
     * <p>
     * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property vpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property workerInstanceTypes: Worker node ECS specification type code.
     * <p>
     * For more details, see Instance Specification Family.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkerInstanceTypes();

    /**
     * Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkerVSwitchIds();

    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * <p>
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return null;
    }

    /**
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment.
     * <p>
     * When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
        return null;
    }

    /**
     * Property cpuPolicy: CPU policy.
     * <p>
     * The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuPolicy() {
        return null;
    }

    /**
     * Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
     * <p>
     * If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return null;
    }

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
     * <p>
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     * Property keyPair: Key pair name.
     * <p>
     * Specify one of KeyPair or LoginPassword.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
        return null;
    }

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesVersion() {
        return null;
    }

    /**
     * Property loginPassword: SSH login password.
     * <p>
     * Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return null;
    }

    /**
     * Property masterAutoRenew: Whether the master node automatically renews.
     * <p>
     * It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenew() {
        return null;
    }

    /**
     * Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenewPeriod() {
        return null;
    }

    /**
     * Property masterCount: Number of master instances.
     * <p>
     * The value can be 3 or 5. The default value is 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterCount() {
        return null;
    }

    /**
     * Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisk() {
        return null;
    }

    /**
     * Property masterDataDisks: Master data disk type, size and other configuration combinations.
     * <p>
     * This parameter is valid only when the master node data disk is mounted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisks() {
        return null;
    }

    /**
     * Property masterInstanceChargeType: Master node payment type.
     * <p>
     * The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceChargeType() {
        return null;
    }

    /**
     * Property masterPeriod: The duration of the annual subscription and monthly subscription.
     * <p>
     * It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriod() {
        return null;
    }

    /**
     * Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.
     * <p>
     * The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriodUnit() {
        return null;
    }

    /**
     * Property masterSystemDiskCategory: Master disk system disk type.
     * <p>
     * The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskCategory() {
        return null;
    }

    /**
     * Property masterSystemDiskSize: Master disk system disk size in GiB.
     * <p>
     * Default to 120.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskSize() {
        return null;
    }

    /**
     * Property nodePortRange: Node service port.
     * <p>
     * The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodePortRange() {
        return null;
    }

    /**
     * Property numOfNodes: Number of worker nodes.
     * <p>
     * The range is [0,300].
     * Default to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNumOfNodes() {
        return null;
    }

    /**
     * Property podVswitchIds: The list of pod vSwitches.
     * <p>
     * For each vSwitch that is allocated to nodes,
     * you must specify at least one pod vSwitch in the same zone.
     * The pod vSwitches cannot be the same as the node vSwitches.
     * We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodVswitchIds() {
        return null;
    }

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
     * <p>
     * The default is iptables.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyMode() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property runtime: The container runtime of the cluster.
     * <p>
     * The default runtime is Docker.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuntime() {
        return null;
    }

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
     * <p>
     * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return null;
    }

    /**
     * Property snatEntry: Whether to configure SNAT for the network.
     * <p>
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntry() {
        return null;
    }

    /**
     * Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSshFlags() {
        return null;
    }

    /**
     * Property tags: Tag the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property taint: It is used to mark nodes with taints.
     * <p>
     * It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaint() {
        return null;
    }

    /**
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes.
     * <p>
     * The default value is 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return null;
    }

    /**
     * Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.
     * <p>
     * The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenew() {
        return null;
    }

    /**
     * Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenewPeriod() {
        return null;
    }

    /**
     * Property workerDataDisk: Whether to mount the data disk.
     * <p>
     * The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisk() {
        return null;
    }

    /**
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size.
     * <p>
     * This parameter is valid only when the worker node data disk is mounted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisks() {
        return null;
    }

    /**
     * Property workerInstanceChargeType: Worker node payment type.
     * <p>
     * The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerInstanceChargeType() {
        return null;
    }

    /**
     * Property workerPeriod: The duration of the annual and monthly subscription.
     * <p>
     * It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriod() {
        return null;
    }

    /**
     * Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.
     * <p>
     * The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriodUnit() {
        return null;
    }

    /**
     * Property workerSystemDiskCategory: Worker node system disk type.
     * <p>
     * The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskCategory() {
        return null;
    }

    /**
     * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * <p>
     * Default to 120.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link KubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KubernetesClusterProps> {
        java.lang.Object masterInstanceTypes;
        java.lang.Object masterVSwitchIds;
        java.lang.Object name;
        java.lang.Object vpcId;
        java.lang.Object workerInstanceTypes;
        java.lang.Object workerVSwitchIds;
        java.lang.Object addons;
        java.lang.Object cloudMonitorFlags;
        java.lang.Object containerCidr;
        java.lang.Object cpuPolicy;
        java.lang.Object disableRollback;
        java.lang.Object endpointPublicAccess;
        java.lang.Object keyPair;
        java.lang.Object kubernetesVersion;
        java.lang.Object loginPassword;
        java.lang.Object masterAutoRenew;
        java.lang.Object masterAutoRenewPeriod;
        java.lang.Object masterCount;
        java.lang.Object masterDataDisk;
        java.lang.Object masterDataDisks;
        java.lang.Object masterInstanceChargeType;
        java.lang.Object masterPeriod;
        java.lang.Object masterPeriodUnit;
        java.lang.Object masterSystemDiskCategory;
        java.lang.Object masterSystemDiskSize;
        java.lang.Object nodePortRange;
        java.lang.Object numOfNodes;
        java.lang.Object podVswitchIds;
        java.lang.Object proxyMode;
        java.lang.Object resourceGroupId;
        java.lang.Object runtime;
        java.lang.Object securityGroupId;
        java.lang.Object serviceCidr;
        java.lang.Object snatEntry;
        java.lang.Object sshFlags;
        java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags;
        java.lang.Object taint;
        java.lang.Object timeoutMins;
        java.lang.Object workerAutoRenew;
        java.lang.Object workerAutoRenewPeriod;
        java.lang.Object workerDataDisk;
        java.lang.Object workerDataDisks;
        java.lang.Object workerInstanceChargeType;
        java.lang.Object workerPeriod;
        java.lang.Object workerPeriodUnit;
        java.lang.Object workerSystemDiskCategory;
        java.lang.Object workerSystemDiskSize;

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes Property masterInstanceTypes: Master node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
         *                            List size must be 3, Instance Type can be repeated.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(java.util.List<? extends java.lang.Object> masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes Property masterInstanceTypes: Master node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
         *                            List size must be 3, Instance Type can be repeated.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(com.aliyun.ros.cdk.core.IResolvable masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds Property masterVSwitchIds: Master node switch ID. This parameter is required.
         *                         To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(java.util.List<? extends java.lang.Object> masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds Property masterVSwitchIds: Master node switch ID. This parameter is required.
         *                         To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(com.aliyun.ros.cdk.core.IResolvable masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds Property workerVSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(java.util.List<? extends java.lang.Object> workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds Property workerVSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(com.aliyun.ros.cdk.core.IResolvable workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCpuPolicy}
         * @param cpuPolicy Property cpuPolicy: CPU policy.
         *                  The cluster version is 1.12.6 and above supports both static and none strategies.
         * @return {@code this}
         */
        public Builder cpuPolicy(java.lang.String cpuPolicy) {
            this.cpuPolicy = cpuPolicy;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCpuPolicy}
         * @param cpuPolicy Property cpuPolicy: CPU policy.
         *                  The cluster version is 1.12.6 and above supports both static and none strategies.
         * @return {@code this}
         */
        public Builder cpuPolicy(com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
            this.cpuPolicy = cpuPolicy;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew Property masterAutoRenew: Whether the master node automatically renews.
         *                        It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
         *                        true: automatic renewal
         *                        false: do not renew automatically
         *                        Default to true.
         * @return {@code this}
         */
        public Builder masterAutoRenew(java.lang.Boolean masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew Property masterAutoRenew: Whether the master node automatically renews.
         *                        It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
         *                        true: automatic renewal
         *                        false: do not renew automatically
         *                        Default to true.
         * @return {@code this}
         */
        public Builder masterAutoRenew(com.aliyun.ros.cdk.core.IResolvable masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenewPeriod}
         * @param masterAutoRenewPeriod Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder masterAutoRenewPeriod(java.lang.Number masterAutoRenewPeriod) {
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenewPeriod}
         * @param masterAutoRenewPeriod Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder masterAutoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable masterAutoRenewPeriod) {
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterCount}
         * @param masterCount Property masterCount: Number of master instances.
         *                    The value can be 3 or 5. The default value is 3.
         * @return {@code this}
         */
        public Builder masterCount(java.lang.Number masterCount) {
            this.masterCount = masterCount;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterCount}
         * @param masterCount Property masterCount: Number of master instances.
         *                    The value can be 3 or 5. The default value is 3.
         * @return {@code this}
         */
        public Builder masterCount(com.aliyun.ros.cdk.core.IResolvable masterCount) {
            this.masterCount = masterCount;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
         * @return {@code this}
         */
        public Builder masterDataDisk(java.lang.Boolean masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
         * @return {@code this}
         */
        public Builder masterDataDisk(com.aliyun.ros.cdk.core.IResolvable masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks Property masterDataDisks: Master data disk type, size and other configuration combinations.
         *                        This parameter is valid only when the master node data disk is mounted.
         * @return {@code this}
         */
        public Builder masterDataDisks(com.aliyun.ros.cdk.core.IResolvable masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks Property masterDataDisks: Master data disk type, size and other configuration combinations.
         *                        This parameter is valid only when the master node data disk is mounted.
         * @return {@code this}
         */
        public Builder masterDataDisks(java.util.List<? extends java.lang.Object> masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceChargeType}
         * @param masterInstanceChargeType Property masterInstanceChargeType: Master node payment type.
         *                                 The optional values are:
         *                                 PrePaid: prepaid
         *                                 PostPaid: Pay as you go
         *                                 Default to PostPaid.
         * @return {@code this}
         */
        public Builder masterInstanceChargeType(java.lang.String masterInstanceChargeType) {
            this.masterInstanceChargeType = masterInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceChargeType}
         * @param masterInstanceChargeType Property masterInstanceChargeType: Master node payment type.
         *                                 The optional values are:
         *                                 PrePaid: prepaid
         *                                 PostPaid: Pay as you go
         *                                 Default to PostPaid.
         * @return {@code this}
         */
        public Builder masterInstanceChargeType(com.aliyun.ros.cdk.core.IResolvable masterInstanceChargeType) {
            this.masterInstanceChargeType = masterInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriod}
         * @param masterPeriod Property masterPeriod: The duration of the annual subscription and monthly subscription.
         *                     It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
         *                     When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *                     When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *                     Default to 1.
         * @return {@code this}
         */
        public Builder masterPeriod(java.lang.Number masterPeriod) {
            this.masterPeriod = masterPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriod}
         * @param masterPeriod Property masterPeriod: The duration of the annual subscription and monthly subscription.
         *                     It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
         *                     When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *                     When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *                     Default to 1.
         * @return {@code this}
         */
        public Builder masterPeriod(com.aliyun.ros.cdk.core.IResolvable masterPeriod) {
            this.masterPeriod = masterPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriodUnit}
         * @param masterPeriodUnit Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.
         *                         The options are:
         *                         Week: Time is measured in weeks
         *                         Month: time in months
         *                         Default to Month
         * @return {@code this}
         */
        public Builder masterPeriodUnit(java.lang.String masterPeriodUnit) {
            this.masterPeriodUnit = masterPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriodUnit}
         * @param masterPeriodUnit Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.
         *                         The options are:
         *                         Week: Time is measured in weeks
         *                         Month: time in months
         *                         Default to Month
         * @return {@code this}
         */
        public Builder masterPeriodUnit(com.aliyun.ros.cdk.core.IResolvable masterPeriodUnit) {
            this.masterPeriodUnit = masterPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskCategory}
         * @param masterSystemDiskCategory Property masterSystemDiskCategory: Master disk system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 cloud_essd: ESSD cloud diskDefault to cloud_ssd.
         * @return {@code this}
         */
        public Builder masterSystemDiskCategory(java.lang.String masterSystemDiskCategory) {
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskCategory}
         * @param masterSystemDiskCategory Property masterSystemDiskCategory: Master disk system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 cloud_essd: ESSD cloud diskDefault to cloud_ssd.
         * @return {@code this}
         */
        public Builder masterSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable masterSystemDiskCategory) {
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskSize}
         * @param masterSystemDiskSize Property masterSystemDiskSize: Master disk system disk size in GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder masterSystemDiskSize(java.lang.Number masterSystemDiskSize) {
            this.masterSystemDiskSize = masterSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskSize}
         * @param masterSystemDiskSize Property masterSystemDiskSize: Master disk system disk size in GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder masterSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable masterSystemDiskSize) {
            this.masterSystemDiskSize = masterSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNodePortRange}
         * @param nodePortRange Property nodePortRange: Node service port.
         *                      The value range is [30000, 65535].
         *                      Default to 30000-65535.
         * @return {@code this}
         */
        public Builder nodePortRange(java.lang.String nodePortRange) {
            this.nodePortRange = nodePortRange;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNodePortRange}
         * @param nodePortRange Property nodePortRange: Node service port.
         *                      The value range is [30000, 65535].
         *                      Default to 30000-65535.
         * @return {@code this}
         */
        public Builder nodePortRange(com.aliyun.ros.cdk.core.IResolvable nodePortRange) {
            this.nodePortRange = nodePortRange;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes.
         *                   The range is [0,300].
         *                   Default to 3.
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes.
         *                   The range is [0,300].
         *                   Default to 3.
         * @return {@code this}
         */
        public Builder numOfNodes(com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVswitchIds(com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVswitchIds(java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getRuntime}
         * @param runtime Property runtime: The container runtime of the cluster.
         *                The default runtime is Docker.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getRuntime}
         * @param runtime Property runtime: The container runtime of the cluster.
         *                The default runtime is Docker.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.cs.RosKubernetesCluster.RuntimeProperty runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSnatEntry}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network.
         *                  When a VPC can access the public network environment, set it to false.
         *                  When an existing VPC cannot access the public network environment:
         *                  When set to True, SNAT is configured and the public network environment can be accessed at this time.
         *                  If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         *                  Default to true.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSnatEntry}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network.
         *                  When a VPC can access the public network environment, set it to false.
         *                  When an existing VPC cannot access the public network environment:
         *                  When set to True, SNAT is configured and the public network environment can be accessed at this time.
         *                  If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         *                  Default to true.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSshFlags}
         * @param sshFlags Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
         * @return {@code this}
         */
        public Builder sshFlags(java.lang.Boolean sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSshFlags}
         * @param sshFlags Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
         * @return {@code this}
         */
        public Builder sshFlags(com.aliyun.ros.cdk.core.IResolvable sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTags}
         * @param tags Property tags: Tag the cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTaint}
         * @param taint Property taint: It is used to mark nodes with taints.
         *              It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * @return {@code this}
         */
        public Builder taint(com.aliyun.ros.cdk.core.IResolvable taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTaint}
         * @param taint Property taint: It is used to mark nodes with taints.
         *              It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * @return {@code this}
         */
        public Builder taint(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.
         *                        The optional values are:
         *                        true: automatic renewal
         *                        false: do not renew automatically
         *                        Default to true.
         * @return {@code this}
         */
        public Builder workerAutoRenew(java.lang.Boolean workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.
         *                        The optional values are:
         *                        true: automatic renewal
         *                        false: do not renew automatically
         *                        Default to true.
         * @return {@code this}
         */
        public Builder workerAutoRenew(com.aliyun.ros.cdk.core.IResolvable workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenewPeriod}
         * @param workerAutoRenewPeriod Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder workerAutoRenewPeriod(java.lang.Number workerAutoRenewPeriod) {
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenewPeriod}
         * @param workerAutoRenewPeriod Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder workerAutoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable workerAutoRenewPeriod) {
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk.
         *                       The options are as follows:
         *                       true: indicates that the worker node mounts data disks.
         *                       false: indicates that the worker node does not mount data disks.
         *                       Default to false.
         * @return {@code this}
         */
        public Builder workerDataDisk(java.lang.Boolean workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk.
         *                       The options are as follows:
         *                       true: indicates that the worker node mounts data disks.
         *                       false: indicates that the worker node does not mount data disks.
         *                       Default to false.
         * @return {@code this}
         */
        public Builder workerDataDisk(com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceChargeType}
         * @param workerInstanceChargeType Property workerInstanceChargeType: Worker node payment type.
         *                                 The optional values are:
         *                                 PrePaid: prepaid
         *                                 PostPaid: Pay as you go
         *                                 Default to PostPaid.
         * @return {@code this}
         */
        public Builder workerInstanceChargeType(java.lang.String workerInstanceChargeType) {
            this.workerInstanceChargeType = workerInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceChargeType}
         * @param workerInstanceChargeType Property workerInstanceChargeType: Worker node payment type.
         *                                 The optional values are:
         *                                 PrePaid: prepaid
         *                                 PostPaid: Pay as you go
         *                                 Default to PostPaid.
         * @return {@code this}
         */
        public Builder workerInstanceChargeType(com.aliyun.ros.cdk.core.IResolvable workerInstanceChargeType) {
            this.workerInstanceChargeType = workerInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriod}
         * @param workerPeriod Property workerPeriod: The duration of the annual and monthly subscription.
         *                     It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
         *                     When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *                     When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *                     Default to 1.
         * @return {@code this}
         */
        public Builder workerPeriod(java.lang.Number workerPeriod) {
            this.workerPeriod = workerPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriod}
         * @param workerPeriod Property workerPeriod: The duration of the annual and monthly subscription.
         *                     It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
         *                     When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *                     When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *                     Default to 1.
         * @return {@code this}
         */
        public Builder workerPeriod(com.aliyun.ros.cdk.core.IResolvable workerPeriod) {
            this.workerPeriod = workerPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriodUnit}
         * @param workerPeriodUnit Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.
         *                         The options are:
         *                         Week: Time is measured in weeks
         *                         Month: time in months
         *                         Default to Month.
         * @return {@code this}
         */
        public Builder workerPeriodUnit(java.lang.String workerPeriodUnit) {
            this.workerPeriodUnit = workerPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriodUnit}
         * @param workerPeriodUnit Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.
         *                         The options are:
         *                         Week: Time is measured in weeks
         *                         Month: time in months
         *                         Default to Month.
         * @return {@code this}
         */
        public Builder workerPeriodUnit(com.aliyun.ros.cdk.core.IResolvable workerPeriodUnit) {
            this.workerPeriodUnit = workerPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link KubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KubernetesClusterProps {
        private final java.lang.Object masterInstanceTypes;
        private final java.lang.Object masterVSwitchIds;
        private final java.lang.Object name;
        private final java.lang.Object vpcId;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object workerVSwitchIds;
        private final java.lang.Object addons;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object containerCidr;
        private final java.lang.Object cpuPolicy;
        private final java.lang.Object disableRollback;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object keyPair;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object loginPassword;
        private final java.lang.Object masterAutoRenew;
        private final java.lang.Object masterAutoRenewPeriod;
        private final java.lang.Object masterCount;
        private final java.lang.Object masterDataDisk;
        private final java.lang.Object masterDataDisks;
        private final java.lang.Object masterInstanceChargeType;
        private final java.lang.Object masterPeriod;
        private final java.lang.Object masterPeriodUnit;
        private final java.lang.Object masterSystemDiskCategory;
        private final java.lang.Object masterSystemDiskSize;
        private final java.lang.Object nodePortRange;
        private final java.lang.Object numOfNodes;
        private final java.lang.Object podVswitchIds;
        private final java.lang.Object proxyMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object runtime;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.lang.Object sshFlags;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object taint;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object workerAutoRenew;
        private final java.lang.Object workerAutoRenewPeriod;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDisks;
        private final java.lang.Object workerInstanceChargeType;
        private final java.lang.Object workerPeriod;
        private final java.lang.Object workerPeriodUnit;
        private final java.lang.Object workerSystemDiskCategory;
        private final java.lang.Object workerSystemDiskSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.masterInstanceTypes = software.amazon.jsii.Kernel.get(this, "masterInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterVSwitchIds = software.amazon.jsii.Kernel.get(this, "masterVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerVSwitchIds = software.amazon.jsii.Kernel.get(this, "workerVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuPolicy = software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterAutoRenew = software.amazon.jsii.Kernel.get(this, "masterAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "masterAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterCount = software.amazon.jsii.Kernel.get(this, "masterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterDataDisk = software.amazon.jsii.Kernel.get(this, "masterDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterDataDisks = software.amazon.jsii.Kernel.get(this, "masterDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceChargeType = software.amazon.jsii.Kernel.get(this, "masterInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPeriod = software.amazon.jsii.Kernel.get(this, "masterPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPeriodUnit = software.amazon.jsii.Kernel.get(this, "masterPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "masterSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSystemDiskSize = software.amazon.jsii.Kernel.get(this, "masterSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodePortRange = software.amazon.jsii.Kernel.get(this, "nodePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podVswitchIds = software.amazon.jsii.Kernel.get(this, "podVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sshFlags = software.amazon.jsii.Kernel.get(this, "sshFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty.class)));
            this.taint = software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerAutoRenew = software.amazon.jsii.Kernel.get(this, "workerAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "workerAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisks = software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceChargeType = software.amazon.jsii.Kernel.get(this, "workerInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerPeriod = software.amazon.jsii.Kernel.get(this, "workerPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerPeriodUnit = software.amazon.jsii.Kernel.get(this, "workerPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskSize = software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.masterInstanceTypes = java.util.Objects.requireNonNull(builder.masterInstanceTypes, "masterInstanceTypes is required");
            this.masterVSwitchIds = java.util.Objects.requireNonNull(builder.masterVSwitchIds, "masterVSwitchIds is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.workerInstanceTypes = java.util.Objects.requireNonNull(builder.workerInstanceTypes, "workerInstanceTypes is required");
            this.workerVSwitchIds = java.util.Objects.requireNonNull(builder.workerVSwitchIds, "workerVSwitchIds is required");
            this.addons = builder.addons;
            this.cloudMonitorFlags = builder.cloudMonitorFlags;
            this.containerCidr = builder.containerCidr;
            this.cpuPolicy = builder.cpuPolicy;
            this.disableRollback = builder.disableRollback;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.keyPair = builder.keyPair;
            this.kubernetesVersion = builder.kubernetesVersion;
            this.loginPassword = builder.loginPassword;
            this.masterAutoRenew = builder.masterAutoRenew;
            this.masterAutoRenewPeriod = builder.masterAutoRenewPeriod;
            this.masterCount = builder.masterCount;
            this.masterDataDisk = builder.masterDataDisk;
            this.masterDataDisks = builder.masterDataDisks;
            this.masterInstanceChargeType = builder.masterInstanceChargeType;
            this.masterPeriod = builder.masterPeriod;
            this.masterPeriodUnit = builder.masterPeriodUnit;
            this.masterSystemDiskCategory = builder.masterSystemDiskCategory;
            this.masterSystemDiskSize = builder.masterSystemDiskSize;
            this.nodePortRange = builder.nodePortRange;
            this.numOfNodes = builder.numOfNodes;
            this.podVswitchIds = builder.podVswitchIds;
            this.proxyMode = builder.proxyMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.runtime = builder.runtime;
            this.securityGroupId = builder.securityGroupId;
            this.serviceCidr = builder.serviceCidr;
            this.snatEntry = builder.snatEntry;
            this.sshFlags = builder.sshFlags;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty>)builder.tags;
            this.taint = builder.taint;
            this.timeoutMins = builder.timeoutMins;
            this.workerAutoRenew = builder.workerAutoRenew;
            this.workerAutoRenewPeriod = builder.workerAutoRenewPeriod;
            this.workerDataDisk = builder.workerDataDisk;
            this.workerDataDisks = builder.workerDataDisks;
            this.workerInstanceChargeType = builder.workerInstanceChargeType;
            this.workerPeriod = builder.workerPeriod;
            this.workerPeriodUnit = builder.workerPeriodUnit;
            this.workerSystemDiskCategory = builder.workerSystemDiskCategory;
            this.workerSystemDiskSize = builder.workerSystemDiskSize;
        }

        @Override
        public final java.lang.Object getMasterInstanceTypes() {
            return this.masterInstanceTypes;
        }

        @Override
        public final java.lang.Object getMasterVSwitchIds() {
            return this.masterVSwitchIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getWorkerInstanceTypes() {
            return this.workerInstanceTypes;
        }

        @Override
        public final java.lang.Object getWorkerVSwitchIds() {
            return this.workerVSwitchIds;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getCloudMonitorFlags() {
            return this.cloudMonitorFlags;
        }

        @Override
        public final java.lang.Object getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.Object getCpuPolicy() {
            return this.cpuPolicy;
        }

        @Override
        public final java.lang.Object getDisableRollback() {
            return this.disableRollback;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getKeyPair() {
            return this.keyPair;
        }

        @Override
        public final java.lang.Object getKubernetesVersion() {
            return this.kubernetesVersion;
        }

        @Override
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getMasterAutoRenew() {
            return this.masterAutoRenew;
        }

        @Override
        public final java.lang.Object getMasterAutoRenewPeriod() {
            return this.masterAutoRenewPeriod;
        }

        @Override
        public final java.lang.Object getMasterCount() {
            return this.masterCount;
        }

        @Override
        public final java.lang.Object getMasterDataDisk() {
            return this.masterDataDisk;
        }

        @Override
        public final java.lang.Object getMasterDataDisks() {
            return this.masterDataDisks;
        }

        @Override
        public final java.lang.Object getMasterInstanceChargeType() {
            return this.masterInstanceChargeType;
        }

        @Override
        public final java.lang.Object getMasterPeriod() {
            return this.masterPeriod;
        }

        @Override
        public final java.lang.Object getMasterPeriodUnit() {
            return this.masterPeriodUnit;
        }

        @Override
        public final java.lang.Object getMasterSystemDiskCategory() {
            return this.masterSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getMasterSystemDiskSize() {
            return this.masterSystemDiskSize;
        }

        @Override
        public final java.lang.Object getNodePortRange() {
            return this.nodePortRange;
        }

        @Override
        public final java.lang.Object getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.Object getPodVswitchIds() {
            return this.podVswitchIds;
        }

        @Override
        public final java.lang.Object getProxyMode() {
            return this.proxyMode;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRuntime() {
            return this.runtime;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServiceCidr() {
            return this.serviceCidr;
        }

        @Override
        public final java.lang.Object getSnatEntry() {
            return this.snatEntry;
        }

        @Override
        public final java.lang.Object getSshFlags() {
            return this.sshFlags;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTaint() {
            return this.taint;
        }

        @Override
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        public final java.lang.Object getWorkerAutoRenew() {
            return this.workerAutoRenew;
        }

        @Override
        public final java.lang.Object getWorkerAutoRenewPeriod() {
            return this.workerAutoRenewPeriod;
        }

        @Override
        public final java.lang.Object getWorkerDataDisk() {
            return this.workerDataDisk;
        }

        @Override
        public final java.lang.Object getWorkerDataDisks() {
            return this.workerDataDisks;
        }

        @Override
        public final java.lang.Object getWorkerInstanceChargeType() {
            return this.workerInstanceChargeType;
        }

        @Override
        public final java.lang.Object getWorkerPeriod() {
            return this.workerPeriod;
        }

        @Override
        public final java.lang.Object getWorkerPeriodUnit() {
            return this.workerPeriodUnit;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskCategory() {
            return this.workerSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskSize() {
            return this.workerSystemDiskSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("masterInstanceTypes", om.valueToTree(this.getMasterInstanceTypes()));
            data.set("masterVSwitchIds", om.valueToTree(this.getMasterVSwitchIds()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("workerInstanceTypes", om.valueToTree(this.getWorkerInstanceTypes()));
            data.set("workerVSwitchIds", om.valueToTree(this.getWorkerVSwitchIds()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getCloudMonitorFlags() != null) {
                data.set("cloudMonitorFlags", om.valueToTree(this.getCloudMonitorFlags()));
            }
            if (this.getContainerCidr() != null) {
                data.set("containerCidr", om.valueToTree(this.getContainerCidr()));
            }
            if (this.getCpuPolicy() != null) {
                data.set("cpuPolicy", om.valueToTree(this.getCpuPolicy()));
            }
            if (this.getDisableRollback() != null) {
                data.set("disableRollback", om.valueToTree(this.getDisableRollback()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getMasterAutoRenew() != null) {
                data.set("masterAutoRenew", om.valueToTree(this.getMasterAutoRenew()));
            }
            if (this.getMasterAutoRenewPeriod() != null) {
                data.set("masterAutoRenewPeriod", om.valueToTree(this.getMasterAutoRenewPeriod()));
            }
            if (this.getMasterCount() != null) {
                data.set("masterCount", om.valueToTree(this.getMasterCount()));
            }
            if (this.getMasterDataDisk() != null) {
                data.set("masterDataDisk", om.valueToTree(this.getMasterDataDisk()));
            }
            if (this.getMasterDataDisks() != null) {
                data.set("masterDataDisks", om.valueToTree(this.getMasterDataDisks()));
            }
            if (this.getMasterInstanceChargeType() != null) {
                data.set("masterInstanceChargeType", om.valueToTree(this.getMasterInstanceChargeType()));
            }
            if (this.getMasterPeriod() != null) {
                data.set("masterPeriod", om.valueToTree(this.getMasterPeriod()));
            }
            if (this.getMasterPeriodUnit() != null) {
                data.set("masterPeriodUnit", om.valueToTree(this.getMasterPeriodUnit()));
            }
            if (this.getMasterSystemDiskCategory() != null) {
                data.set("masterSystemDiskCategory", om.valueToTree(this.getMasterSystemDiskCategory()));
            }
            if (this.getMasterSystemDiskSize() != null) {
                data.set("masterSystemDiskSize", om.valueToTree(this.getMasterSystemDiskSize()));
            }
            if (this.getNodePortRange() != null) {
                data.set("nodePortRange", om.valueToTree(this.getNodePortRange()));
            }
            if (this.getNumOfNodes() != null) {
                data.set("numOfNodes", om.valueToTree(this.getNumOfNodes()));
            }
            if (this.getPodVswitchIds() != null) {
                data.set("podVswitchIds", om.valueToTree(this.getPodVswitchIds()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRuntime() != null) {
                data.set("runtime", om.valueToTree(this.getRuntime()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getSshFlags() != null) {
                data.set("sshFlags", om.valueToTree(this.getSshFlags()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTaint() != null) {
                data.set("taint", om.valueToTree(this.getTaint()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }
            if (this.getWorkerAutoRenew() != null) {
                data.set("workerAutoRenew", om.valueToTree(this.getWorkerAutoRenew()));
            }
            if (this.getWorkerAutoRenewPeriod() != null) {
                data.set("workerAutoRenewPeriod", om.valueToTree(this.getWorkerAutoRenewPeriod()));
            }
            if (this.getWorkerDataDisk() != null) {
                data.set("workerDataDisk", om.valueToTree(this.getWorkerDataDisk()));
            }
            if (this.getWorkerDataDisks() != null) {
                data.set("workerDataDisks", om.valueToTree(this.getWorkerDataDisks()));
            }
            if (this.getWorkerInstanceChargeType() != null) {
                data.set("workerInstanceChargeType", om.valueToTree(this.getWorkerInstanceChargeType()));
            }
            if (this.getWorkerPeriod() != null) {
                data.set("workerPeriod", om.valueToTree(this.getWorkerPeriod()));
            }
            if (this.getWorkerPeriodUnit() != null) {
                data.set("workerPeriodUnit", om.valueToTree(this.getWorkerPeriodUnit()));
            }
            if (this.getWorkerSystemDiskCategory() != null) {
                data.set("workerSystemDiskCategory", om.valueToTree(this.getWorkerSystemDiskCategory()));
            }
            if (this.getWorkerSystemDiskSize() != null) {
                data.set("workerSystemDiskSize", om.valueToTree(this.getWorkerSystemDiskSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.KubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KubernetesClusterProps.Jsii$Proxy that = (KubernetesClusterProps.Jsii$Proxy) o;

            if (!masterInstanceTypes.equals(that.masterInstanceTypes)) return false;
            if (!masterVSwitchIds.equals(that.masterVSwitchIds)) return false;
            if (!name.equals(that.name)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!workerInstanceTypes.equals(that.workerInstanceTypes)) return false;
            if (!workerVSwitchIds.equals(that.workerVSwitchIds)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.cpuPolicy != null ? !this.cpuPolicy.equals(that.cpuPolicy) : that.cpuPolicy != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.masterAutoRenew != null ? !this.masterAutoRenew.equals(that.masterAutoRenew) : that.masterAutoRenew != null) return false;
            if (this.masterAutoRenewPeriod != null ? !this.masterAutoRenewPeriod.equals(that.masterAutoRenewPeriod) : that.masterAutoRenewPeriod != null) return false;
            if (this.masterCount != null ? !this.masterCount.equals(that.masterCount) : that.masterCount != null) return false;
            if (this.masterDataDisk != null ? !this.masterDataDisk.equals(that.masterDataDisk) : that.masterDataDisk != null) return false;
            if (this.masterDataDisks != null ? !this.masterDataDisks.equals(that.masterDataDisks) : that.masterDataDisks != null) return false;
            if (this.masterInstanceChargeType != null ? !this.masterInstanceChargeType.equals(that.masterInstanceChargeType) : that.masterInstanceChargeType != null) return false;
            if (this.masterPeriod != null ? !this.masterPeriod.equals(that.masterPeriod) : that.masterPeriod != null) return false;
            if (this.masterPeriodUnit != null ? !this.masterPeriodUnit.equals(that.masterPeriodUnit) : that.masterPeriodUnit != null) return false;
            if (this.masterSystemDiskCategory != null ? !this.masterSystemDiskCategory.equals(that.masterSystemDiskCategory) : that.masterSystemDiskCategory != null) return false;
            if (this.masterSystemDiskSize != null ? !this.masterSystemDiskSize.equals(that.masterSystemDiskSize) : that.masterSystemDiskSize != null) return false;
            if (this.nodePortRange != null ? !this.nodePortRange.equals(that.nodePortRange) : that.nodePortRange != null) return false;
            if (this.numOfNodes != null ? !this.numOfNodes.equals(that.numOfNodes) : that.numOfNodes != null) return false;
            if (this.podVswitchIds != null ? !this.podVswitchIds.equals(that.podVswitchIds) : that.podVswitchIds != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.runtime != null ? !this.runtime.equals(that.runtime) : that.runtime != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.sshFlags != null ? !this.sshFlags.equals(that.sshFlags) : that.sshFlags != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.taint != null ? !this.taint.equals(that.taint) : that.taint != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.workerAutoRenew != null ? !this.workerAutoRenew.equals(that.workerAutoRenew) : that.workerAutoRenew != null) return false;
            if (this.workerAutoRenewPeriod != null ? !this.workerAutoRenewPeriod.equals(that.workerAutoRenewPeriod) : that.workerAutoRenewPeriod != null) return false;
            if (this.workerDataDisk != null ? !this.workerDataDisk.equals(that.workerDataDisk) : that.workerDataDisk != null) return false;
            if (this.workerDataDisks != null ? !this.workerDataDisks.equals(that.workerDataDisks) : that.workerDataDisks != null) return false;
            if (this.workerInstanceChargeType != null ? !this.workerInstanceChargeType.equals(that.workerInstanceChargeType) : that.workerInstanceChargeType != null) return false;
            if (this.workerPeriod != null ? !this.workerPeriod.equals(that.workerPeriod) : that.workerPeriod != null) return false;
            if (this.workerPeriodUnit != null ? !this.workerPeriodUnit.equals(that.workerPeriodUnit) : that.workerPeriodUnit != null) return false;
            if (this.workerSystemDiskCategory != null ? !this.workerSystemDiskCategory.equals(that.workerSystemDiskCategory) : that.workerSystemDiskCategory != null) return false;
            return this.workerSystemDiskSize != null ? this.workerSystemDiskSize.equals(that.workerSystemDiskSize) : that.workerSystemDiskSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.masterInstanceTypes.hashCode();
            result = 31 * result + (this.masterVSwitchIds.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.workerInstanceTypes.hashCode());
            result = 31 * result + (this.workerVSwitchIds.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.cpuPolicy != null ? this.cpuPolicy.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.masterAutoRenew != null ? this.masterAutoRenew.hashCode() : 0);
            result = 31 * result + (this.masterAutoRenewPeriod != null ? this.masterAutoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.masterCount != null ? this.masterCount.hashCode() : 0);
            result = 31 * result + (this.masterDataDisk != null ? this.masterDataDisk.hashCode() : 0);
            result = 31 * result + (this.masterDataDisks != null ? this.masterDataDisks.hashCode() : 0);
            result = 31 * result + (this.masterInstanceChargeType != null ? this.masterInstanceChargeType.hashCode() : 0);
            result = 31 * result + (this.masterPeriod != null ? this.masterPeriod.hashCode() : 0);
            result = 31 * result + (this.masterPeriodUnit != null ? this.masterPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.masterSystemDiskCategory != null ? this.masterSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.masterSystemDiskSize != null ? this.masterSystemDiskSize.hashCode() : 0);
            result = 31 * result + (this.nodePortRange != null ? this.nodePortRange.hashCode() : 0);
            result = 31 * result + (this.numOfNodes != null ? this.numOfNodes.hashCode() : 0);
            result = 31 * result + (this.podVswitchIds != null ? this.podVswitchIds.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.runtime != null ? this.runtime.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.sshFlags != null ? this.sshFlags.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.taint != null ? this.taint.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.workerAutoRenew != null ? this.workerAutoRenew.hashCode() : 0);
            result = 31 * result + (this.workerAutoRenewPeriod != null ? this.workerAutoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.workerDataDisk != null ? this.workerDataDisk.hashCode() : 0);
            result = 31 * result + (this.workerDataDisks != null ? this.workerDataDisks.hashCode() : 0);
            result = 31 * result + (this.workerInstanceChargeType != null ? this.workerInstanceChargeType.hashCode() : 0);
            result = 31 * result + (this.workerPeriod != null ? this.workerPeriod.hashCode() : 0);
            result = 31 * result + (this.workerPeriodUnit != null ? this.workerPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskCategory != null ? this.workerSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskSize != null ? this.workerSystemDiskSize.hashCode() : 0);
            return result;
        }
    }
}
