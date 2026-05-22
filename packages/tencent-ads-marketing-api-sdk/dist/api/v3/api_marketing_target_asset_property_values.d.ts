import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetAssetPropertyValuesGetResponseData } from "../../model/v3/index";
export interface MarketingTargetAssetPropertyValuesApiGetRequest {
    organizationId: number | string;
    marketingTargetType: string;
    marketingAssetType?: string;
    marketingAssetCategory?: string;
    propertyName?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class MarketingTargetAssetPropertyValuesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MarketingTargetAssetPropertyValuesApiGetRequest): Promise<MarketingTargetAssetPropertyValuesGetResponseData>;
    getWithHttpInfo(request: MarketingTargetAssetPropertyValuesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertyValuesGetResponseData>>;
}
