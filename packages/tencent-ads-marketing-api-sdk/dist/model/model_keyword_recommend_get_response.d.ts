import type { ApiErrorStruct, KeywordRecommendGetResponseData } from "../model/index";
export interface KeywordRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: KeywordRecommendGetResponseData;
}
