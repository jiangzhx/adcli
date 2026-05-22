import type { Conf, WalletBindingAccountStruct } from "../v3/index";
export interface WalletGetBindingAdvertiserGetResponseData {
    wallet_binding_account_list?: WalletBindingAccountStruct[];
    page_info?: Conf;
}
