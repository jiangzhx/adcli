// Generated from tencentad/marketing-api-go-sdk pkg/model/model_merge_fund_type_funds_get_list_struct.go
// Do not edit manually.

import type { AccountMergeTypeMap, FundStatus } from "../model/index";

export interface MergeFundTypeFundsGetListStruct {
  balance?: number;
  fund_status?: FundStatus;
  effect_funds?: string[];
  realtime_cost?: number;
  fund_type?: AccountMergeTypeMap;
}

