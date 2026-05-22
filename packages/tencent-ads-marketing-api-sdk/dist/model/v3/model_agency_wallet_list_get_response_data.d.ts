import type { Conf, WalletListStruct } from "../v3/index";
export interface AgencyWalletListGetResponseData {
    wallet_list?: WalletListStruct[];
    page_info?: Conf;
}
