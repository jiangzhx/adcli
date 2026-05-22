import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetAssetCategoriesGetResponseData } from "../../model/v3/index";
export interface MarketingTargetAssetCategoriesApiGetRequest {
    organizationId: number | string;
    marketingTargetType: string;
    marketingAssetType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class MarketingTargetAssetCategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingTargetAssetCategoriesApiGetRequest): Promise<MarketingTargetAssetCategoriesGetResponseData>;
    getWithHttpInfo(request: MarketingTargetAssetCategoriesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetCategoriesGetResponseData>>;
}
