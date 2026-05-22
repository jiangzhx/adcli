// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { GameMarketingLifecycleStruct, MarketingTargetType } from "../models";

export interface GameFeatureAddRequest {
  account_id?: number | string;
  marketing_target_type?: MarketingTargetType;
  marketing_target_detail_id?: string;
  profit_mode_id?: number | string;
  game_type_id?: number | string;
  gameplay_id_list?: number[];
  game_theme_id?: number | string;
  game_sub_theme_id?: number | string;
  game_marketing_lifecycle_list?: GameMarketingLifecycleStruct[];
}

