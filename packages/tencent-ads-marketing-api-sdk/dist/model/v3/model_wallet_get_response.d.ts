import type { ApiErrorStruct, WalletGetResponseData } from "../v3/index";
export interface WalletGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletGetResponseData;
}
