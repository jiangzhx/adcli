import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinkAssetAvailableGetResponseData } from "../models";
export interface V3ConversionLinkAssetAvailableApiGetRequest {
    accountId: number | string;
    marketingGoal: string;
    marketingTargetType: string;
    marketingAssetOuterId?: string;
    fields?: unknown;
}
export declare class V3ConversionLinkAssetAvailableApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ConversionLinkAssetAvailableApiGetRequest): Promise<ConversionLinkAssetAvailableGetResponseData>;
    getWithHttpInfo(request: V3ConversionLinkAssetAvailableApiGetRequest): Promise<ApiResponse<ConversionLinkAssetAvailableGetResponseData>>;
}
