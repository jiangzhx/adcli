import type { AdsAddResponseData, ApiErrorStruct } from "../model/index";
export interface AdsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsAddResponseData;
}
