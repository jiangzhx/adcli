import type { ComponentType, ReviewResultStatus } from "../v3/index";
export interface ComponentInfoCanEmpty {
    component_id?: number | string;
    component_type?: ComponentType;
    review_status?: ReviewResultStatus;
}
