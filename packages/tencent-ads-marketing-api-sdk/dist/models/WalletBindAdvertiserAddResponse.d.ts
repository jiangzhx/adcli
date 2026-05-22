import type { ApiErrorStruct } from "../models";
export interface WalletBindAdvertiserAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
