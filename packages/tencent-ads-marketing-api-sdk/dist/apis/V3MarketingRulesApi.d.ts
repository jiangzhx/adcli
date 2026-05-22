import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingRulesGetResponseData } from "../models";
export interface V3MarketingRulesApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3MarketingRulesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingRulesApiGetRequest): Promise<MarketingRulesGetResponseData>;
    getWithHttpInfo(request: V3MarketingRulesApiGetRequest): Promise<ApiResponse<MarketingRulesGetResponseData>>;
}
