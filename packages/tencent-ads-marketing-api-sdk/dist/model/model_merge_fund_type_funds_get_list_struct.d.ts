import type { AccountMergeTypeMap, FundStatus } from "../model/index";
export interface MergeFundTypeFundsGetListStruct {
    balance?: number;
    fund_status?: FundStatus;
    effect_funds?: string[];
    realtime_cost?: number;
    fund_type?: AccountMergeTypeMap;
}
