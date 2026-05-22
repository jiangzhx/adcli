import type { AccountTypeMap } from "../model/index";
export interface FundTransferAddRequest {
    amount?: number;
    transfer_type?: string;
    external_bill_no?: string;
    memo?: string;
    transfer_try_best?: number;
    high_frequency_transfer?: number;
    account_id?: number | string;
    fund_type?: AccountTypeMap;
}
