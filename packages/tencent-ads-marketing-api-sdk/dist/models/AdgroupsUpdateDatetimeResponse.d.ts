import type { AdgroupsUpdateDatetimeResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsUpdateDatetimeResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateDatetimeResponseData;
}
