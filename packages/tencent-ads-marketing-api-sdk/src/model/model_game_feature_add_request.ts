// Generated from tencentad/marketing-api-go-sdk pkg/model/model_game_feature_add_request.go
// Do not edit manually.

import type { GameMarketingLifecycleStruct, PromotedObjectType } from "../model/index";

export interface GameFeatureAddRequest {
  account_id?: number | string;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  profit_mode_id?: number | string;
  game_type_id?: number | string;
  gameplay_id_list?: number[];
  game_theme_id?: number | string;
  game_sub_theme_id?: number | string;
  game_marketing_lifecycle_list?: GameMarketingLifecycleStruct[];
}

