import type { ApiErrorStruct, WalletInvoiceGetResponseData } from "../models";
export interface WalletInvoiceGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletInvoiceGetResponseData;
}
