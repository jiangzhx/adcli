import type { ViewerIdType } from "../model/index";
export interface AdcreativePreviewsAddRequest {
    adgroup_id?: number | string;
    campaign_id?: number | string;
    user_id_type?: ViewerIdType;
    user_id_list?: string[];
    account_id?: number | string;
}
