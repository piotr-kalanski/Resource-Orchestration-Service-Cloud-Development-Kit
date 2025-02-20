"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sleep = exports.SleepProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "SleepProperty", { enumerable: true, get: function () { return ros_generated_1.RosSleep; } });
/**
 * A ROS resource type:  `ALIYUN::ROS::Sleep`
 */
class Sleep extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSleep = new ros_generated_1.RosSleep(this, id, {
            deleteDuration: props.deleteDuration,
            updateRollbackDuration: props.updateRollbackDuration,
            updateDuration: props.updateDuration,
            createDuration: props.createDuration,
            triggers: props.triggers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSleep;
    }
}
exports.Sleep = Sleep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xlZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbGVlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBaUNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRW5DOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBb0IsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDckMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBMUJELHNCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NsZWVwIH0gZnJvbSAnLi9yb3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2xlZXAgYXMgU2xlZXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpTbGVlcGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbGVlcFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNyZWF0ZUR1cmF0aW9uOiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVzb3VyY2UgY3JlYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3JlYXRlRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGVEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIGRlbGV0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0ZUR1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJpZ2dlcnM6IEFyYml0cmFyeSBtYXAgb2YgdmFsdWVzIHRoYXQsIHdoZW4gY2hhbmdlZCwgd2lsbCBydW4gdXBkYXRlIG9yIHVwZGF0ZSByb2xsYmFjayBkZWxheXMgYWdhaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1cGRhdGVEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIHVwZGF0ZS4gSXQgb25seSB0cmlnZ2VycyB3aGVuIHRoZSBwcm9wZXJ0eSBUcmlnZ2VycyBjaGFuZ2UgYW5kIHRoZSBzdGF0dXMgb2Ygc3RhY2sgaXMgVVBEQVRFX0lOX1BST0dSRVNTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVwZGF0ZUR1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXBkYXRlUm9sbGJhY2tEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIHVwZGF0ZSByb2xsYmFjay4gSXQgb25seSB0cmlnZ2VycyB3aGVuIHN0YWNrIHVwZGF0ZSBmYWlsZWQgYW5kIHJlc291cmNlIHdhcyB1cGRhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVwZGF0ZVJvbGxiYWNrRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJPUzo6U2xlZXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBTbGVlcCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpTbGVlcGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2xlZXBQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NsZWVwID0gbmV3IFJvc1NsZWVwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVsZXRlRHVyYXRpb246IHByb3BzLmRlbGV0ZUR1cmF0aW9uLFxuICAgICAgICAgICAgdXBkYXRlUm9sbGJhY2tEdXJhdGlvbjogcHJvcHMudXBkYXRlUm9sbGJhY2tEdXJhdGlvbixcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiBwcm9wcy51cGRhdGVEdXJhdGlvbixcbiAgICAgICAgICAgIGNyZWF0ZUR1cmF0aW9uOiBwcm9wcy5jcmVhdGVEdXJhdGlvbixcbiAgICAgICAgICAgIHRyaWdnZXJzOiBwcm9wcy50cmlnZ2VycyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTbGVlcDtcbiAgICB9XG59XG4iXX0=