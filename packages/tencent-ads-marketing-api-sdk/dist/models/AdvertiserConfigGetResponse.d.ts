import type { AdvertiserConfigGetResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserConfigGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserConfigGetResponseData;
}
