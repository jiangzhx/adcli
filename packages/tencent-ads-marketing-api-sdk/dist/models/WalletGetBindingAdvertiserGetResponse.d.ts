import type { ApiErrorStruct, WalletGetBindingAdvertiserGetResponseData } from "../models";
export interface WalletGetBindingAdvertiserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletGetBindingAdvertiserGetResponseData;
}
