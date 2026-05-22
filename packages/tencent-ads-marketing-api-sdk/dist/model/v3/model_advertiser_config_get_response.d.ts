import type { AdvertiserConfigGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserConfigGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserConfigGetResponseData;
}
