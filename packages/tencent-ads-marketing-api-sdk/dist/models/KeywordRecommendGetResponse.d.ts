import type { ApiErrorStruct, KeywordRecommendGetResponseData } from "../models";
export interface KeywordRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: KeywordRecommendGetResponseData;
}
