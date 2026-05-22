import type { ViewerIdType } from "../v3/index";
export interface AdcreativePreviewsGetCollectionStruct {
    user_id?: string;
    user_id_type?: ViewerIdType;
    is_previewed?: boolean;
    adgroup_id?: number | string;
    dynamic_creative_id?: number | string;
}
