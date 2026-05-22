import type { AdgroupNegativewordsUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdgroupNegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsUpdateResponseData;
}
