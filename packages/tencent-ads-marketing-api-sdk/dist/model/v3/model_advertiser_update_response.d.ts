import type { AdvertiserUpdateResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserUpdateResponseData;
}
