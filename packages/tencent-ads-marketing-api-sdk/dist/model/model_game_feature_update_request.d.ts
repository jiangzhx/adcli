import type { GameMarketingLifecycleStruct, PromotedObjectType } from "../model/index";
export interface GameFeatureUpdateRequest {
    account_id?: number | string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    game_marketing_lifecycle_list?: GameMarketingLifecycleStruct[];
}
