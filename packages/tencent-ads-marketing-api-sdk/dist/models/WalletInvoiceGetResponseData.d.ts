import type { Conf, WalletInvoiceGetListStruct } from "../models";
export interface WalletInvoiceGetResponseData {
    list?: WalletInvoiceGetListStruct[];
    page_info?: Conf;
}
