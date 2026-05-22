import type { ApiErrorStruct, WalletTransferAddResponseData } from "../models";
export interface WalletTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletTransferAddResponseData;
}
