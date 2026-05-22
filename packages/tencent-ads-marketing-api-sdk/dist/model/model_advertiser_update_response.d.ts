import type { AdvertiserUpdateResponseData, ApiErrorStruct } from "../model/index";
export interface AdvertiserUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserUpdateResponseData;
}
