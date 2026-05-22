import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BarrageRecommendGetResponseData } from "../models";
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
