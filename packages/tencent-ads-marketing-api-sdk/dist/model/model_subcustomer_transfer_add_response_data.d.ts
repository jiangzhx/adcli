import type { AccountTypeMap } from "../model/index";
export interface SubcustomerTransferAddResponseData {
    fund_type?: AccountTypeMap;
    amount?: number;
    external_bill_no?: string;
    time?: number;
}
