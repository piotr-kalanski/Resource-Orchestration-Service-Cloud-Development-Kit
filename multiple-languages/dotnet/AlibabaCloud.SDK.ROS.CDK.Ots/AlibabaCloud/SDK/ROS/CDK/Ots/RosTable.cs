using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>A ROS template type:  `ALIYUN::OTS::Table`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosTable), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosTableProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosTable : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::OTS::Table`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosTable(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ots.IRosTableProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTable(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosTable))!;

        /// <remarks>
        /// <strong>Attribute</strong>: TableName: Table name
        /// </remarks>
        [JsiiProperty(name: "attrTableName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTableName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object InstanceName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        /// </remarks>
        [JsiiProperty(name: "primaryKey", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object PrimaryKey
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TableName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: columns: Attribute column for table store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Columns
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deviationCellVersionInSec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeviationCellVersionInSec
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxVersions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MaxVersions
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "reservedThroughput", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty\"}]}}", isOptional: true)]
        public virtual object? ReservedThroughput
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryIndices: The secondary indices of the table.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SecondaryIndices
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeToLive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TimeToLive
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IColumnsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
        public interface IColumnsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The column name of the column.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the column.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IColumnsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IColumnsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The column name of the column.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Name
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of the column.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
        public class ColumnsProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IColumnsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The column name of the column.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the column.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPrimaryKeyProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
        public interface IPrimaryKeyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name for primary key.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPrimaryKeyProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IPrimaryKeyProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Name for primary key.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Name
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
        public class PrimaryKeyProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IPrimaryKeyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name for primary key.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IReservedThroughputProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
        public interface IReservedThroughputProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "read", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Read
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "write", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Write
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IReservedThroughputProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IReservedThroughputProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
                /// </remarks>
                [JsiiProperty(name: "read", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Read
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
                /// </remarks>
                [JsiiProperty(name: "write", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Write
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
        public class ReservedThroughputProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IReservedThroughputProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "read", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Read
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "write", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Write
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISecondaryIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
        public interface ISecondaryIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columns: The columns of the index.
            /// </remarks>
            [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            object Columns
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexName: The index name.
            /// </remarks>
            [JsiiProperty(name: "indexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object IndexName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
            /// </remarks>
            [JsiiProperty(name: "primaryKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            object PrimaryKeys
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexType: The index type
            /// </remarks>
            [JsiiProperty(name: "indexType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IndexType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISecondaryIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.ISecondaryIndicesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columns: The columns of the index.
                /// </remarks>
                [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
                public object Columns
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: indexName: The index name.
                /// </remarks>
                [JsiiProperty(name: "indexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object IndexName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
                /// </remarks>
                [JsiiProperty(name: "primaryKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
                public object PrimaryKeys
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: indexType: The index type
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "indexType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IndexType
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
        public class SecondaryIndicesProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.ISecondaryIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columns: The columns of the index.
            /// </remarks>
            [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Columns
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexName: The index name.
            /// </remarks>
            [JsiiProperty(name: "indexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IndexName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
            /// </remarks>
            [JsiiProperty(name: "primaryKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object PrimaryKeys
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexType: The index type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IndexType
            {
                get;
                set;
            }
        }
    }
}
