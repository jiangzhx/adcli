import type { Conf, WalletInvoiceGetListStruct } from "../v3/index";
export interface WalletInvoiceGetResponseData {
    list?: WalletInvoiceGetListStruct[];
    page_info?: Conf;
}
