import type { AppealStatus, ReviewElementType } from "../v3/index";
export interface ElementAppealReviewGetResponseData {
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
    appeal_result?: string;
    appeal_status?: AppealStatus;
    description?: string;
    image_list?: string[];
    reply_image_url_list?: string[];
}
