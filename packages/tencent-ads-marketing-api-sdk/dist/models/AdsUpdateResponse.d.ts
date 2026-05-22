import type { AdsUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsUpdateResponseData;
}
