import type { ViewerIdType } from "../v3/index";
export interface AdcreativePreviewsAddRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    user_id_type?: ViewerIdType;
    user_id_list?: string[];
}
