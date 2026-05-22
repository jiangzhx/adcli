import { ApiClient, type ApiResponse } from "./client";
import type { MarketingRulesGetResponseData } from "../../model/v3/index";
export interface MarketingRulesApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class MarketingRulesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingRulesApiGetRequest): Promise<MarketingRulesGetResponseData>;
    getWithHttpInfo(request: MarketingRulesApiGetRequest): Promise<ApiResponse<MarketingRulesGetResponseData>>;
}
