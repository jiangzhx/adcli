import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetsAddRequest, MarketingTargetAssetsAddResponseData, MarketingTargetAssetsDeleteRequest, MarketingTargetAssetsGetResponseData, MarketingTargetAssetsUpdateRequest } from "../models";
export interface V3MarketingTargetAssetsApiAddRequest {
    data: MarketingTargetAssetsAddRequest;
}
export interface V3MarketingTargetAssetsApiDeleteRequest {
    data: MarketingTargetAssetsDeleteRequest;
}
export interface V3MarketingTargetAssetsApiGetRequest {
    marketingTargetType: string;
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    fields?: unknown;
}
export interface V3MarketingTargetAssetsApiUpdateRequest {
    data: MarketingTargetAssetsUpdateRequest;
}
export declare class V3MarketingTargetAssetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MarketingTargetAssetsApiAddRequest): Promise<MarketingTargetAssetsAddResponseData>;
    addWithHttpInfo(request: V3MarketingTargetAssetsApiAddRequest): Promise<ApiResponse<MarketingTargetAssetsAddResponseData>>;
    delete(request: V3MarketingTargetAssetsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3MarketingTargetAssetsApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: V3MarketingTargetAssetsApiGetRequest): Promise<MarketingTargetAssetsGetResponseData>;
    getWithHttpInfo(request: V3MarketingTargetAssetsApiGetRequest): Promise<ApiResponse<MarketingTargetAssetsGetResponseData>>;
    update(request: V3MarketingTargetAssetsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3MarketingTargetAssetsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
