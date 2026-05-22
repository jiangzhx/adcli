// Generated from tencentad/marketing-api-go-sdk pkg/model/model_compete_pcvr_trends_struct.go
// Do not edit manually.

import type { PointStruct } from "../model/index";

export interface CompetePcvrTrendsStruct {
  score?: number;
  self_avg?: PointStruct[];
  self_chose_avg?: PointStruct[];
  winner_chose_avg?: PointStruct[];
  conclusion?: string;
}

