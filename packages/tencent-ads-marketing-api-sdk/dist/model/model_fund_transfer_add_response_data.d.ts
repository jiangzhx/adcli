import type { AccountTypeMap } from "../model/index";
export interface FundTransferAddResponseData {
    amount?: number;
    external_bill_no?: string;
    fund_type?: AccountTypeMap;
    time?: number;
    is_repeated?: boolean;
}
