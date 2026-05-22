// Generated from tencentad/marketing-api-go-sdk pkg/model/model_detail_funnel_struct.go
// Do not edit manually.

import type { CompeteWinRateFunnelStruct, CpaFunnelStruct, CtrFunnelStruct, CvrFunnelStruct, ExposureCountFunnelStruct, TargetingWidenessRateFunnelStruct } from "../model/index";

export interface DetailFunnelStruct {
  targeting_wideness_rate?: TargetingWidenessRateFunnelStruct;
  compete_win_rate?: CompeteWinRateFunnelStruct;
  exposure_count?: ExposureCountFunnelStruct;
  ctr?: CtrFunnelStruct;
  cvr?: CvrFunnelStruct;
  cpa?: CpaFunnelStruct;
}

