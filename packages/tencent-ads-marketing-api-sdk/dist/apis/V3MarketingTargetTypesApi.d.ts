import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetTypesGetResponseData } from "../models";
export interface V3MarketingTargetTypesApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3MarketingTargetTypesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingTargetTypesApiGetRequest): Promise<MarketingTargetTypesGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetTypesApiGetRequest): Promise<ApiResponse<MarketingTargetTypesGetResponseData>>;
}
