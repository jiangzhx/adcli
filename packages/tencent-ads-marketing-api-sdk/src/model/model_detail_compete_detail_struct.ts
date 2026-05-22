// Generated from tencentad/marketing-api-go-sdk pkg/model/model_detail_compete_detail_struct.go
// Do not edit manually.

import type { CompeteAttributionStruct, CompeteBidDetailsStruct, CompeteBudgetDetailsStruct, CompetePctrTrendsStruct, CompetePcvrTrendsStruct, CompeteSurroundingsStruct, CompeteUserAcceptanceStruct, CompeteWinAdgroupStruct } from "../model/index";

export interface DetailCompeteDetailStruct {
  compete_attribution?: CompeteAttributionStruct[];
  compete_budget_details?: CompeteBudgetDetailsStruct;
  compete_bid_details?: CompeteBidDetailsStruct;
  compete_user_acceptance?: CompeteUserAcceptanceStruct;
  compete_pctr_trends?: CompetePctrTrendsStruct;
  compete_pcvr_trends?: CompetePcvrTrendsStruct;
  compete_win_adgroup?: CompeteWinAdgroupStruct;
  compete_surroundings?: CompeteSurroundingsStruct;
}

