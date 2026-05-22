// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_funds_get_list_struct.go
// Do not edit manually.

import type { AccountTypeMap, EffectListStruct, FundStatus } from "../v3/index";

export interface FundsGetListStruct {
  fund_type?: AccountTypeMap;
  balance?: number;
  bill_deposit_amount?: number;
  fund_status?: FundStatus;
  realtime_cost?: number;
  effect_funds?: EffectListStruct[];
}

