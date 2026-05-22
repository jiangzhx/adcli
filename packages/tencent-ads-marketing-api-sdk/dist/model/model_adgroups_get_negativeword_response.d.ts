import type { AdgroupsGetNegativewordResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsGetNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsGetNegativewordResponseData;
}
