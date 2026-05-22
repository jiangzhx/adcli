import type { ApiErrorStruct, BarrageRecommendGetResponseData } from "../v3/index";
export interface BarrageRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageRecommendGetResponseData;
}
