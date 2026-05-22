import type { ApiErrorStruct, WalletEditAddResponseData } from "../v3/index";
export interface WalletEditAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletEditAddResponseData;
}
