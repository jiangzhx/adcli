import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetPropertiesGetResponseData } from "../models";
export interface V3MarketingTargetAssetPropertiesApiGetRequest {
    organizationId: number | string;
    marketingTargetType: string;
    marketingAssetType?: string;
    marketingAssetCategory?: string;
    fields?: unknown;
}
export declare class V3MarketingTargetAssetPropertiesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingTargetAssetPropertiesApiGetRequest): Promise<MarketingTargetAssetPropertiesGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetAssetPropertiesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertiesGetResponseData>>;
}
