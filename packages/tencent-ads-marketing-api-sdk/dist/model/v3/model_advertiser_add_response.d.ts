import type { AdvertiserAddResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserAddResponseData;
}
