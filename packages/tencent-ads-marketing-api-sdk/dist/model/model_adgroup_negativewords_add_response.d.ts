import type { AdgroupNegativewordsAddResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupNegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsAddResponseData;
}
