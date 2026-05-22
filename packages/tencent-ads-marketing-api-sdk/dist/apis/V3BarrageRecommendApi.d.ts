import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BarrageRecommendGetResponseData } from "../models";
export interface V3BarrageRecommendApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3BarrageRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BarrageRecommendApiGetRequest): Promise<BarrageRecommendGetResponseData>;
    getWithHttpInfo(request: V3BarrageRecommendApiGetRequest): Promise<ApiResponse<BarrageRecommendGetResponseData>>;
}
