import type { ApiErrorStruct, WalletTransferAddResponseData } from "../v3/index";
export interface WalletTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletTransferAddResponseData;
}
