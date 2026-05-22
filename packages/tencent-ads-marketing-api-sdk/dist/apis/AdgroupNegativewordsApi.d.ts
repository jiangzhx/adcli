import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetRequest, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../models";
export interface AdgroupNegativewordsApiAddRequest {
    data: AdgroupNegativewordsAddRequest;
}
export interface AdgroupNegativewordsApiGetRequest {
    data: AdgroupNegativewordsGetRequest;
}
export interface AdgroupNegativewordsApiUpdateRequest {
    data: AdgroupNegativewordsUpdateRequest;
}
export declare class AdgroupNegativewordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdgroupNegativewordsApiAddRequest): Promise<AdgroupNegativewordsAddResponseData>;
    addWithHttpInfo(request: AdgroupNegativewordsApiAddRequest): Promise<ApiResponse<AdgroupNegativewordsAddResponseData>>;
    get(request: AdgroupNegativewordsApiGetRequest): Promise<AdgroupNegativewordsGetResponseData>;
    getWithHttpInfo(request: AdgroupNegativewordsApiGetRequest): Promise<ApiResponse<AdgroupNegativewordsGetResponseData>>;
    update(request: AdgroupNegativewordsApiUpdateRequest): Promise<AdgroupNegativewordsUpdateResponseData>;
    updateWithHttpInfo(request: AdgroupNegativewordsApiUpdateRequest): Promise<ApiResponse<AdgroupNegativewordsUpdateResponseData>>;
}
