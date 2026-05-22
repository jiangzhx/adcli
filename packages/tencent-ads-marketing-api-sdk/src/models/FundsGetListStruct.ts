// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AccountTypeMap, EffectListStruct, FundStatus } from "../models";

export interface FundsGetListStruct {
  fund_type?: AccountTypeMap;
  balance?: number;
  bill_deposit_amount?: number;
  fund_status?: FundStatus;
  realtime_cost?: number;
  effect_funds?: EffectListStruct[];
}

