import type { AccountTypeMap } from "../v3/index";
export interface WalletTransferAddResponseData {
    fund_type?: AccountTypeMap;
    amount?: number;
    external_bill_no?: string;
    time?: number;
    is_repeated?: boolean;
}
