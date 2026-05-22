import type { PromotedObjectType } from "../model/index";
export interface WechatChannelsTrackingSpec {
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    sub_product_id?: string;
}
