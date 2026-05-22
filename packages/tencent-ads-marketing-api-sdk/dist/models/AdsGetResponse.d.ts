import type { AdsGetResponseData, ApiErrorStruct } from "../models";
export interface AdsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsGetResponseData;
}
