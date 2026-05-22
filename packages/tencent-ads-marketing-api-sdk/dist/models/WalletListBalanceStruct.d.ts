import type { AccountTypeMap } from "../models";
export interface WalletListBalanceStruct {
    fund_type?: AccountTypeMap;
    balance?: number;
}
