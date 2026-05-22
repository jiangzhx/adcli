import type { ApiErrorStruct, WalletInvoiceGetResponseData } from "../v3/index";
export interface WalletInvoiceGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletInvoiceGetResponseData;
}
