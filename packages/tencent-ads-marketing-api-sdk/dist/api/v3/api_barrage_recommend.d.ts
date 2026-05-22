import { ApiClient, type ApiResponse } from "./client";
import type { BarrageRecommendGetResponseData } from "../../model/v3/index";
export interface BarrageRecommendApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class BarrageRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BarrageRecommendApiGetRequest): Promise<BarrageRecommendGetResponseData>;
    getWithHttpInfo(request: BarrageRecommendApiGetRequest): Promise<ApiResponse<BarrageRecommendGetResponseData>>;
}
