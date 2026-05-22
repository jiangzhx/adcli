import type { AccountMergeTypeMap } from "../model/index";
export interface MergeFundTypeDailyBalanceReportGetListStruct {
    account_id?: number | string;
    fund_type?: AccountMergeTypeMap;
    time?: number;
    deposit?: number;
    paid?: number;
    trans_in?: number;
    trans_out?: number;
    credit_modify?: number;
    balance?: number;
    preauth_balance?: number;
}
