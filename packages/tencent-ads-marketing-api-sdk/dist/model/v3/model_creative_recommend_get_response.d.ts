import type { ApiErrorStruct, CreativeRecommendGetResponseData } from "../v3/index";
export interface CreativeRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeRecommendGetResponseData;
}
