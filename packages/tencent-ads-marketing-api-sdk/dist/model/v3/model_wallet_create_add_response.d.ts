import type { ApiErrorStruct, WalletCreateAddResponseData } from "../v3/index";
export interface WalletCreateAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletCreateAddResponseData;
}
