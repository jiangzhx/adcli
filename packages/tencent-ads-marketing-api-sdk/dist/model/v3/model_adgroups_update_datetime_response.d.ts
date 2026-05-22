import type { AdgroupsUpdateDatetimeResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsUpdateDatetimeResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateDatetimeResponseData;
}
