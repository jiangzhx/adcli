import type { ApiErrorStruct, WalletCreateAddResponseData } from "../models";
export interface WalletCreateAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WalletCreateAddResponseData;
}
