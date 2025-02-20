"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = exports.RouteProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RouteProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRoute; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Route`
 */
class Route extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRoute = new ecs_generated_1.RosRoute(this, id, {
            nextHopType: props.nextHopType === undefined || props.nextHopType === null ? 'Instance' : props.nextHopType,
            routeTableId: props.routeTableId,
            nextHopId: props.nextHopId,
            nextHopList: props.nextHopList,
            destinationCidrBlock: props.destinationCidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
    }
}
exports.Route = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBaUNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRW5DOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUMzRyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1NBQ25ELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQTFCRCxzQkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSb3V0ZSB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1JvdXRlIGFzIFJvdXRlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6Um91dGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvbkNpZHJCbG9jazogVGhlIFJvdXRlRW50cnkncyB0YXJnZXQgbmV0d29yayBzZWdtZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZVRhYmxlSWQ6IFJvdXRlVGFibGVJZCBvZiBjcmVhdGVkIHJvdXRlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlVGFibGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV4dEhvcElkOiBUaGUgcm91dGUgZW50cnkncyBuZXh0IGhvcC4gV2hlbiB0aGUgTmV4dEhvcExpc3QgaXMgc3BlY2lmaWVkLCB0aGUgdmFsdWUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5leHRIb3BJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5leHRIb3BMaXN0OiBUaGUgcm91dGUgZW50cnkncyBuZXh0IGhvcCBsaXN0LiBJZiByb3V0ZXIgaXMgdmlydHVhbCBib3JkZXIgcm91dGVyLCB0aGUgdmFsdWUgd2lsbCBiZSBpZ25vcmUuIFRoZSBsaXN0IHNob3VsZCBjb250YWluIDItNCBuZXh0IGhvcC4gTmV4dEhvcElkIG9mIGVhY2ggbmV4dCBob3AgbXVzdCBiZSBSb3V0ZXJJbnRlcmZhY2UgdGhhdCBWUm91dGVyIGZvcndhcmRzIHRvIFZCUi5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXh0SG9wTGlzdD86IEFycmF5PFJvc1JvdXRlLk5leHRIb3BMaXN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV4dEhvcFR5cGU6IFRoZSBuZXh0IGhvcCB0eXBlLiBOb3cgc3VwcG9ydCAnSW5zdGFuY2V8SGFWaXB8Um91dGVySW50ZXJmYWNlfE5ldHdvcmtJbnRlcmZhY2V8VnBuR2F0ZXdheXxJUHY2R2F0ZXdheXxOYXRHYXRld2F5fEF0dGFjaG1lbnQnLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbnN0YW5jZS5XaGVuIHRoZSBOZXh0SG9wTGlzdCBpcyBzcGVjaWZpZWQsIHRoZSB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6Um91dGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpSb3V0ZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm91dGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSb3V0ZSA9IG5ldyBSb3NSb3V0ZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5leHRIb3BUeXBlOiBwcm9wcy5uZXh0SG9wVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm5leHRIb3BUeXBlID09PSBudWxsID8gJ0luc3RhbmNlJyA6IHByb3BzLm5leHRIb3BUeXBlLFxuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiBwcm9wcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICBuZXh0SG9wSWQ6IHByb3BzLm5leHRIb3BJZCxcbiAgICAgICAgICAgIG5leHRIb3BMaXN0OiBwcm9wcy5uZXh0SG9wTGlzdCxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBwcm9wcy5kZXN0aW5hdGlvbkNpZHJCbG9jayxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSb3V0ZTtcbiAgICB9XG59XG4iXX0=