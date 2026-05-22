// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_game_feature_v6_get_response_data.go
// Do not edit manually.

import type { GameMarketingLifecycleStruct, MarketingTargetType } from "../v3/index";

export interface GameFeatureV6GetResponseData {
  marketing_target_type?: MarketingTargetType;
  marketing_target_detail_id?: string;
  profit_mode_id?: number | string;
  game_type_id?: number | string;
  game_play_id?: number | string;
  game_sub_play_id_list?: number[];
  game_theme_id?: number | string;
  game_sub_theme_id?: number | string;
  game_marketing_lifecycle_list?: GameMarketingLifecycleStruct[];
}

