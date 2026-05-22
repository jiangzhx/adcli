import type { AdvertiserGetResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserGetResponseData;
}
