// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AccountMergeTypeMap, EffectListStruct, FundStatus } from "../models";

export interface MergeFundTypeFundsGetListStruct {
  fund_type?: AccountMergeTypeMap;
  balance?: number;
  bill_deposit_amount?: number;
  fund_status?: FundStatus;
  realtime_cost?: number;
  effect_funds?: EffectListStruct[];
}

