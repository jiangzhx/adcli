import type { AdvertiserAddResponseData, ApiErrorStruct } from "../model/index";
export interface AdvertiserAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserAddResponseData;
}
