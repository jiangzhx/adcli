import type { AccountMergeTypeMap } from "../v3/index";
export interface MergeFundTypeSubcustomerTransferAddRequest {
    account_id?: number | string;
    amount?: number;
    to_account_id?: number | string;
    fund_type?: AccountMergeTypeMap;
    external_bill_no?: string;
    memo?: string;
    pre_fetch_amount?: number;
}
