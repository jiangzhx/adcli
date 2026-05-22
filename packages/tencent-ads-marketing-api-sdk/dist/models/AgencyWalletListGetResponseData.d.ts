import type { Conf, WalletListStruct } from "../models";
export interface AgencyWalletListGetResponseData {
    wallet_list?: WalletListStruct[];
    page_info?: Conf;
}
