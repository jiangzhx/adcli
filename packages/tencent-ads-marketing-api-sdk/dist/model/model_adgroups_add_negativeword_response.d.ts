import type { AdgroupsAddNegativewordResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsAddNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsAddNegativewordResponseData;
}
