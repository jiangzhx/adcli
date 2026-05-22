import type { AccountTypeMap } from "../v3/index";
export interface SubcustomerTransferAddResponseData {
    fund_type?: AccountTypeMap;
    amount?: number;
    external_bill_no?: string;
    time?: number;
    recommend_amount?: number;
}
