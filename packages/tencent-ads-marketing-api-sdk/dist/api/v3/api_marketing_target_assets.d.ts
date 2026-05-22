import { ApiClient, type ApiResponse } from "./client";
import type { MarketingTargetAssetsAddRequest, MarketingTargetAssetsAddResponseData, MarketingTargetAssetsDeleteRequest, MarketingTargetAssetsGetResponseData, MarketingTargetAssetsUpdateRequest } from "../../model/v3/index";
export interface MarketingTargetAssetsApiAddRequest {
    data: MarketingTargetAssetsAddRequest;
}
export interface MarketingTargetAssetsApiDeleteRequest {
    data: MarketingTargetAssetsDeleteRequest;
}
export interface MarketingTargetAssetsApiGetRequest {
    marketingTargetType: string;
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    fields?: unknown;
}
export interface MarketingTargetAssetsApiUpdateRequest {
    data: MarketingTargetAssetsUpdateRequest;
}
export declare class MarketingTargetAssetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MarketingTargetAssetsApiAddRequest): Promise<MarketingTargetAssetsAddResponseData>;
    addWithHttpInfo(request: MarketingTargetAssetsApiAddRequest): Promise<ApiResponse<MarketingTargetAssetsAddResponseData>>;
    delete(request: MarketingTargetAssetsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: MarketingTargetAssetsApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: MarketingTargetAssetsApiGetRequest): Promise<MarketingTargetAssetsGetResponseData>;
    getWithHttpInfo(request: MarketingTargetAssetsApiGetRequest): Promise<ApiResponse<MarketingTargetAssetsGetResponseData>>;
    update(request: MarketingTargetAssetsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: MarketingTargetAssetsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
