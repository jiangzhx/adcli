import type { AccountTypeMap } from "../models";
export interface WalletTransferAddRequest {
    account_id?: number | string;
    to_account_id?: number | string;
    fund_type?: AccountTypeMap;
    amount?: number;
    transfer_type?: string;
    transfer_try_best?: number;
    external_bill_no?: string;
    memo?: string;
}
