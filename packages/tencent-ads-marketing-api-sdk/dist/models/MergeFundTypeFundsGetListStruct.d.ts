import type { AccountMergeTypeMap, EffectListStruct, FundStatus } from "../models";
export interface MergeFundTypeFundsGetListStruct {
    fund_type?: AccountMergeTypeMap;
    balance?: number;
    bill_deposit_amount?: number;
    fund_status?: FundStatus;
    realtime_cost?: number;
    effect_funds?: EffectListStruct[];
}
