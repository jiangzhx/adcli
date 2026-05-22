import type { AdgroupsAddNegativewordResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsAddNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsAddNegativewordResponseData;
}
