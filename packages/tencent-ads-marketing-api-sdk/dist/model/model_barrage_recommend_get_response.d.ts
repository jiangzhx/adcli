import type { ApiErrorStruct, BarrageRecommendGetResponseData } from "../model/index";
export interface BarrageRecommendGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageRecommendGetResponseData;
}
