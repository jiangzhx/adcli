import type { Conf, WalletBindingAccountStruct } from "../models";
export interface WalletGetBindingAdvertiserGetResponseData {
    wallet_binding_account_list?: WalletBindingAccountStruct[];
    page_info?: Conf;
}
