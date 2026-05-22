import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetDetailGetResponseData } from "../models";
export interface V3MarketingTargetAssetDetailApiGetRequest {
    marketingAssetId: number | string;
    marketingTargetType: string;
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3MarketingTargetAssetDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingTargetAssetDetailApiGetRequest): Promise<MarketingTargetAssetDetailGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetAssetDetailApiGetRequest): Promise<ApiResponse<MarketingTargetAssetDetailGetResponseData>>;
}
