import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LandingPageSellStrategyAddRequest, LandingPageSellStrategyAddResponseData, LandingPageSellStrategyGetResponseData } from "../models";
export interface LandingPageSellStrategyApiAddRequest {
    data: LandingPageSellStrategyAddRequest;
}
export interface LandingPageSellStrategyApiGetRequest {
    accountId: number | string;
    strategyId?: number | string;
    strategyStatus?: number;
    strategyName?: string;
    fullStrategyName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class LandingPageSellStrategyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LandingPageSellStrategyApiAddRequest): Promise<LandingPageSellStrategyAddResponseData>;
    addWithHttpInfo(request: LandingPageSellStrategyApiAddRequest): Promise<ApiResponse<LandingPageSellStrategyAddResponseData>>;
    get(request: LandingPageSellStrategyApiGetRequest): Promise<LandingPageSellStrategyGetResponseData>;
    getWithHttpInfo(request: LandingPageSellStrategyApiGetRequest): Promise<ApiResponse<LandingPageSellStrategyGetResponseData>>;
}
