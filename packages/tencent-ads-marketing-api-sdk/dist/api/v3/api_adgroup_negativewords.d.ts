import { ApiClient, type ApiResponse } from "./client";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../../model/v3/index";
export interface AdgroupNegativewordsApiAddRequest {
    data: AdgroupNegativewordsAddRequest;
}
export interface AdgroupNegativewordsApiGetRequest {
    accountId: number | string;
    adgroupIds: number | string[];
    fields?: unknown;
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
