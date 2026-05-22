import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetTypesGetResponseData } from "../../model/v3/index";
export interface MarketingTargetTypesApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class MarketingTargetTypesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingTargetTypesApiGetRequest): Promise<MarketingTargetTypesGetResponseData>;
    getWithHttpInfo(request: MarketingTargetTypesApiGetRequest): Promise<ApiResponse<MarketingTargetTypesGetResponseData>>;
}
