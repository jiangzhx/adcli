import type { AccountTypeMap } from "../v3/index";
export interface SubcustomerTransferAddRequest {
    account_id?: number | string;
    amount?: number;
    to_account_id?: number | string;
    fund_type?: AccountTypeMap;
    external_bill_no?: string;
    memo?: string;
    pre_fetch_amount?: number;
}
