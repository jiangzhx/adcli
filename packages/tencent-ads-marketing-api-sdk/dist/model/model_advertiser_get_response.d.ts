import type { AdvertiserGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdvertiserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserGetResponseData;
}
