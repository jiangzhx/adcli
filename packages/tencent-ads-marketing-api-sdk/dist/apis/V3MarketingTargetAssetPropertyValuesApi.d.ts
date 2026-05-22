import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetPropertyValuesGetResponseData } from "../models";
export interface V3MarketingTargetAssetPropertyValuesApiGetRequest {
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
export declare class V3MarketingTargetAssetPropertyValuesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MarketingTargetAssetPropertyValuesApiGetRequest): Promise<MarketingTargetAssetPropertyValuesGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetAssetPropertyValuesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertyValuesGetResponseData>>;
}
