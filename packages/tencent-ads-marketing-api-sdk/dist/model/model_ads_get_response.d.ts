import type { AdsGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsGetResponseData;
}
