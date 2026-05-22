import type { AdgroupNegativewordsGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupNegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsGetResponseData;
}
