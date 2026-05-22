import type { AccountTypeMap, FundStatus } from "../model/index";
export interface FundsGetListStruct {
    balance?: number;
    fund_status?: FundStatus;
    realtime_cost?: number;
    fund_type?: AccountTypeMap;
}
