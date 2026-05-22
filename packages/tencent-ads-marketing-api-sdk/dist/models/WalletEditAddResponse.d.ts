import type { ApiErrorStruct, WalletEditAddResponseData } from "../models";
export interface WalletEditAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletEditAddResponseData;
}
