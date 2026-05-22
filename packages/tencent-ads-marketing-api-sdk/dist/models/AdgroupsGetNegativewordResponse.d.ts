import type { AdgroupsGetNegativewordResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsGetNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsGetNegativewordResponseData;
}
