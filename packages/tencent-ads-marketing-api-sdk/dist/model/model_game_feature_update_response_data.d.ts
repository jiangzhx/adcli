import type { PromotedObjectType } from "../model/index";
export interface GameFeatureUpdateResponseData {
    account_id?: number | string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
}
