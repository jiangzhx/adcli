import type { ApiErrorStruct, WalletGetBindingAdvertiserGetResponseData } from "../v3/index";
export interface WalletGetBindingAdvertiserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletGetBindingAdvertiserGetResponseData;
}
