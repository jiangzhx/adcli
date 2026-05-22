import type { ApiErrorStruct, WalletGetResponseData } from "../models";
export interface WalletGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletGetResponseData;
}
