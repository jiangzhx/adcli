import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetAssetPropertiesGetResponseData } from "../../model/v3/index";
export interface MarketingTargetAssetPropertiesApiGetRequest {
    organizationId: number | string;
    marketingTargetType: string;
    marketingAssetType?: string;
    marketingAssetCategory?: string;
    fields?: unknown;
}
export declare class MarketingTargetAssetPropertiesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingTargetAssetPropertiesApiGetRequest): Promise<MarketingTargetAssetPropertiesGetResponseData>;
    getWithHttpInfo(request: MarketingTargetAssetPropertiesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertiesGetResponseData>>;
}
