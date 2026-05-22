import type { AdsAddResponseData, ApiErrorStruct } from "../models";
export interface AdsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsAddResponseData;
}
