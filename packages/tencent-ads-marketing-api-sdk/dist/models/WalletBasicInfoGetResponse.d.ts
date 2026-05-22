import type { ApiErrorStruct, WalletBasicInfoGetResponseData } from "../models";
export interface WalletBasicInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletBasicInfoGetResponseData;
}
