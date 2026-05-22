import type { AccountTypeMap, TradeTypeExt } from "../models";
export interface WalletInvoiceGetListStruct {
    account_id?: number | string;
    account_name?: string;
    fund_type?: AccountTypeMap;
    time?: number;
    external_bill_no?: string;
    trade_type_ext?: TradeTypeExt;
    amount?: number;
    description?: string;
    primary_key?: string;
}
