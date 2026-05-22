// Generated from tencentad/marketing-api-go-sdk pkg/model/model_detail_creative_detail_struct.go
// Do not edit manually.

import type { CtrLevelStruct, EffectivePlayRateStruct, NoInterestClickRateStruct } from "../model/index";

export interface DetailCreativeDetailStruct {
  is_video?: boolean;
  is_wechat_moment?: boolean;
  play_duration?: string;
  play_progress?: string;
  ctr_level?: CtrLevelStruct;
  effective_play_rate?: EffectivePlayRateStruct;
  no_interest_click_rate?: NoInterestClickRateStruct;
}

