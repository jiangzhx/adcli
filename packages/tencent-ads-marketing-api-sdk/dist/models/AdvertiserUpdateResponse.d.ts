import type { AdvertiserUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserUpdateResponseData;
}
