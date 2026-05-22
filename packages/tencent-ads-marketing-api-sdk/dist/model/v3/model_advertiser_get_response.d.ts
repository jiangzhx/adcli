import type { AdvertiserGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserGetResponseData;
}
