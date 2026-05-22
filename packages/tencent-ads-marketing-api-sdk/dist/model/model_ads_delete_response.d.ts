import type { AdsDeleteResponseData, ApiErrorStruct } from "../model/index";
export interface AdsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsDeleteResponseData;
}
