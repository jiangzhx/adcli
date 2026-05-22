import type { AdgroupNegativewordsUpdateResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupNegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsUpdateResponseData;
}
