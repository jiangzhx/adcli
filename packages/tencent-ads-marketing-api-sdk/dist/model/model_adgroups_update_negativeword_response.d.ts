import type { AdgroupsUpdateNegativewordResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsUpdateNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateNegativewordResponseData;
}
