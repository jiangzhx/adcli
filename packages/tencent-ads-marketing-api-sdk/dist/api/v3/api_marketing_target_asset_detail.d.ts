import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetAssetDetailGetResponseData } from "../../model/v3/index";
export interface MarketingTargetAssetDetailApiGetRequest {
    marketingAssetId: number | string;
    marketingTargetType: string;
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class MarketingTargetAssetDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingTargetAssetDetailApiGetRequest): Promise<MarketingTargetAssetDetailGetResponseData>;
    getWithHttpInfo(request: MarketingTargetAssetDetailApiGetRequest): Promise<ApiResponse<MarketingTargetAssetDetailGetResponseData>>;
}
