import type { AdgroupNegativewordsGetResponseData, ApiErrorStruct } from "../models";
export interface AdgroupNegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsGetResponseData;
}
