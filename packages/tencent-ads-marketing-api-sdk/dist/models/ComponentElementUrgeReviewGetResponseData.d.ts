import type { ComponentUrgeInfo, ElementUrgeInfo } from "../models";
export interface ComponentElementUrgeReviewGetResponseData {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    component_urge_info_list?: ComponentUrgeInfo[];
    element_urge_info_list?: ElementUrgeInfo[];
}
