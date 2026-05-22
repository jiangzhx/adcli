import type { AdsUpdateResponseData, ApiErrorStruct } from "../model/index";
export interface AdsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsUpdateResponseData;
}
