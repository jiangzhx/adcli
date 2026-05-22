import type { AccountTypeMap } from "../model/index";
export interface DailyBalanceReportGetListStruct {
    account_id?: number | string;
    fund_type?: AccountTypeMap;
    time?: number;
    deposit?: number;
    paid?: number;
    trans_in?: number;
    trans_out?: number;
    credit_modify?: number;
    balance?: number;
    preauth_balance?: number;
}
