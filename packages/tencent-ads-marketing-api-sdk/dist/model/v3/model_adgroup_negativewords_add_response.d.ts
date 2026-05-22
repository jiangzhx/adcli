import type { AdgroupNegativewordsAddResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupNegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupNegativewordsAddResponseData;
}
