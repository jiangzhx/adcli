import type { ComponentType, ReviewResultStatus } from "../v3/index";
export interface ComponentInfo {
    component_id?: number | string;
    component_type?: ComponentType;
    review_status?: ReviewResultStatus;
}
