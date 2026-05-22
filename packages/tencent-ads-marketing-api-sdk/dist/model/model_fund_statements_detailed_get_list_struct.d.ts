import type { AccountTypeMap, TradeTypeExt } from "../model/index";
export interface FundStatementsDetailedGetListStruct {
    account_id?: number | string;
    balance?: number;
    time?: number;
    external_bill_no?: string;
    trade_type_ext?: TradeTypeExt;
    amount?: number;
    description?: string;
    fund_type?: AccountTypeMap;
}
