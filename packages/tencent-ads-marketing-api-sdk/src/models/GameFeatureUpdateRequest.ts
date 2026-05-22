// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { GameMarketingLifecycleStruct, PromotedObjectType } from "../models";

export interface GameFeatureUpdateRequest {
  account_id?: number | string;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  game_marketing_lifecycle_list?: GameMarketingLifecycleStruct[];
}

