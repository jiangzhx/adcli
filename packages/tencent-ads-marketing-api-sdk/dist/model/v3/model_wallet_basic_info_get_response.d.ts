import type { ApiErrorStruct, WalletBasicInfoGetResponseData } from "../v3/index";
export interface WalletBasicInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletBasicInfoGetResponseData;
}
