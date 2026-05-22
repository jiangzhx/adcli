import type { AccountTypeMap, EffectListStruct, FundStatus } from "../v3/index";
export interface FundsGetListStruct {
    fund_type?: AccountTypeMap;
    balance?: number;
    bill_deposit_amount?: number;
    fund_status?: FundStatus;
    realtime_cost?: number;
    effect_funds?: EffectListStruct[];
}
