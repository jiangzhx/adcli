import type { ComponentType, ReviewResultStatus } from "../models";
export interface ComponentInfoCanEmpty {
    component_id?: number | string;
    component_type?: ComponentType;
    review_status?: ReviewResultStatus;
}
