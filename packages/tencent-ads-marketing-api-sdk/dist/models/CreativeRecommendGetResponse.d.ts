import type { ApiErrorStruct, CreativeRecommendGetResponseData } from "../models";
export interface CreativeRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeRecommendGetResponseData;
}
