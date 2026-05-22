import type { AccountMergeTypeMap } from "../v3/index";
export interface MergeFundTypeSubcustomerTransferAddResponseData {
    fund_type?: AccountMergeTypeMap;
    amount?: number;
    external_bill_no?: string;
    time?: number;
    recommend_amount?: number;
}
