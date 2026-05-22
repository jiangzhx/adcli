// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_merge_fund_type_funds_get_list_struct.go
// Do not edit manually.

import type { AccountMergeTypeMap, EffectListStruct, FundStatus } from "../v3/index";

export interface MergeFundTypeFundsGetListStruct {
  fund_type?: AccountMergeTypeMap;
  balance?: number;
  bill_deposit_amount?: number;
  fund_status?: FundStatus;
  realtime_cost?: number;
  effect_funds?: EffectListStruct[];
}

