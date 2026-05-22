import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetSimilarityDetailGetResponseData, AssetSimilarityDetailUpdateRequest, AssetSimilarityDetailUpdateResponseData } from "../models";
export interface V3AssetSimilarityDetailApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    creativeAssetId?: string;
    creativeAssetType?: string;
    fields?: unknown;
}
export interface V3AssetSimilarityDetailApiUpdateRequest {
    data: AssetSimilarityDetailUpdateRequest;
}
export declare class V3AssetSimilarityDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AssetSimilarityDetailApiGetRequest): Promise<AssetSimilarityDetailGetResponseData>;
    getWithHttpInfo(request: V3AssetSimilarityDetailApiGetRequest): Promise<ApiResponse<AssetSimilarityDetailGetResponseData>>;
    update(request: V3AssetSimilarityDetailApiUpdateRequest): Promise<AssetSimilarityDetailUpdateResponseData>;
    updateWithHttpInfo(request: V3AssetSimilarityDetailApiUpdateRequest): Promise<ApiResponse<AssetSimilarityDetailUpdateResponseData>>;
}
