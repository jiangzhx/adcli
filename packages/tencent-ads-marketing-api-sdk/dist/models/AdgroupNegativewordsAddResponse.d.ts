import type { AdgroupNegativewordsAddResponseData, ApiErrorStruct } from "../models";
export interface AdgroupNegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsAddResponseData;
}
