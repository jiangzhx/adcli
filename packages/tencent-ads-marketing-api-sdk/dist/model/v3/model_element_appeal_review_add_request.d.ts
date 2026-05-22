import type { ReviewElementType } from "../v3/index";
export interface ElementAppealReviewAddRequest {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    component_id?: number | string;
    element_id?: number | string;
    element_type?: ReviewElementType;
    element_value?: string;
    element_finger_print?: string;
    appeal_demand?: string;
    appeal_reason?: string;
    history_approval_component_id?: number | string;
    description?: string;
    image_list?: string[];
}
