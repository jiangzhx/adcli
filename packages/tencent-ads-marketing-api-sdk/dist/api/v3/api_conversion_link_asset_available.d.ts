import { ApiClient, type ApiResponse } from "./client";
import type { ConversionLinkAssetAvailableGetResponseData } from "../../model/v3/index";
export interface ConversionLinkAssetAvailableApiGetRequest {
    accountId: number | string;
    marketingGoal: string;
    marketingTargetType: string;
    marketingAssetOuterId?: string;
    fields?: unknown;
}
export declare class ConversionLinkAssetAvailableApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ConversionLinkAssetAvailableApiGetRequest): Promise<ConversionLinkAssetAvailableGetResponseData>;
    getWithHttpInfo(request: ConversionLinkAssetAvailableApiGetRequest): Promise<ApiResponse<ConversionLinkAssetAvailableGetResponseData>>;
}
