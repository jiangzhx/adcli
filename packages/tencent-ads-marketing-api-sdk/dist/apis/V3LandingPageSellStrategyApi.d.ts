import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LandingPageSellStrategyAddRequest, LandingPageSellStrategyAddResponseData, LandingPageSellStrategyGetResponseData } from "../models";
export interface V3LandingPageSellStrategyApiAddRequest {
    data: LandingPageSellStrategyAddRequest;
}
export interface V3LandingPageSellStrategyApiGetRequest {
    accountId: number | string;
    strategyId?: number | string;
    strategyStatus?: number;
    strategyName?: string;
    fullStrategyName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3LandingPageSellStrategyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LandingPageSellStrategyApiAddRequest): Promise<LandingPageSellStrategyAddResponseData>;
    addWithHttpInfo(request: V3LandingPageSellStrategyApiAddRequest): Promise<ApiResponse<LandingPageSellStrategyAddResponseData>>;
    get(request: V3LandingPageSellStrategyApiGetRequest): Promise<LandingPageSellStrategyGetResponseData>;
    getWithHttpInfo(request: V3LandingPageSellStrategyApiGetRequest): Promise<ApiResponse<LandingPageSellStrategyGetResponseData>>;
}
