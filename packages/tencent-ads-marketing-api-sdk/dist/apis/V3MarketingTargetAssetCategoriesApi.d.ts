import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetCategoriesGetResponseData } from "../models";
export interface V3MarketingTargetAssetCategoriesApiGetRequest {
    organizationId: number | string;
    marketingTargetType: string;
    marketingAssetType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3MarketingTargetAssetCategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingTargetAssetCategoriesApiGetRequest): Promise<MarketingTargetAssetCategoriesGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetAssetCategoriesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetCategoriesGetResponseData>>;
}
