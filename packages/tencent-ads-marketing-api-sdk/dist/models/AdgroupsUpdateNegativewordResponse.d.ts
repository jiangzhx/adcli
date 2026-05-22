import type { AdgroupsUpdateNegativewordResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsUpdateNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateNegativewordResponseData;
}
