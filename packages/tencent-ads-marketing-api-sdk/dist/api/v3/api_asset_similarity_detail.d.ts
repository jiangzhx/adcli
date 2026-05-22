import { ApiClient, type ApiResponse } from "./client";
import type { AssetSimilarityDetailGetResponseData, AssetSimilarityDetailUpdateRequest, AssetSimilarityDetailUpdateResponseData } from "../../model/v3/index";
export interface AssetSimilarityDetailApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    creativeAssetId?: string;
    creativeAssetType?: string;
    fields?: unknown;
}
export interface AssetSimilarityDetailApiUpdateRequest {
    data: AssetSimilarityDetailUpdateRequest;
}
export declare class AssetSimilarityDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AssetSimilarityDetailApiGetRequest): Promise<AssetSimilarityDetailGetResponseData>;
    getWithHttpInfo(request: AssetSimilarityDetailApiGetRequest): Promise<ApiResponse<AssetSimilarityDetailGetResponseData>>;
    update(request: AssetSimilarityDetailApiUpdateRequest): Promise<AssetSimilarityDetailUpdateResponseData>;
    updateWithHttpInfo(request: AssetSimilarityDetailApiUpdateRequest): Promise<ApiResponse<AssetSimilarityDetailUpdateResponseData>>;
}
