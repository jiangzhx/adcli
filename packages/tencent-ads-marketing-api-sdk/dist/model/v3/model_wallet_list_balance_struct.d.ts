import type { AccountTypeMap } from "../v3/index";
export interface WalletListBalanceStruct {
    fund_type?: AccountTypeMap;
    balance?: number;
}
