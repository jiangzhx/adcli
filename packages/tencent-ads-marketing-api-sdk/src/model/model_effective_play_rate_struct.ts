// Generated from tencentad/marketing-api-go-sdk pkg/model/model_effective_play_rate_struct.go
// Do not edit manually.

import type { PointStruct } from "../model/index";

export interface EffectivePlayRateStruct {
  value?: string;
  score?: string;
  rank_overall?: string;
  rank_first_category?: string;
  rank_second_category?: string;
  self_trends?: PointStruct[];
  benchmark_trends?: PointStruct[];
}

