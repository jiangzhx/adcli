import type { AccountTypeMap } from "../models";
export interface SubcustomerTransferAddResponseData {
    fund_type?: AccountTypeMap;
    amount?: number;
    external_bill_no?: string;
    time?: number;
    recommend_amount?: number;
}
