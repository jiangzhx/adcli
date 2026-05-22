import { ApiClient, type ApiResponse } from "./client";
import type { LandingPageSellStrategyAddRequest, LandingPageSellStrategyAddResponseData, LandingPageSellStrategyGetResponseData } from "../../model/v3/index";
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
