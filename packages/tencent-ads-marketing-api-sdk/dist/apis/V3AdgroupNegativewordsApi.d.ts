import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../models";
export interface V3AdgroupNegativewordsApiAddRequest {
    data: AdgroupNegativewordsAddRequest;
}
export interface V3AdgroupNegativewordsApiGetRequest {
    accountId: number | string;
    adgroupIds: number | string[];
    fields?: unknown;
}
export interface V3AdgroupNegativewordsApiUpdateRequest {
    data: AdgroupNegativewordsUpdateRequest;
}
export declare class V3AdgroupNegativewordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AdgroupNegativewordsApiAddRequest): Promise<AdgroupNegativewordsAddResponseData>;
    addWithHttpInfo(request: V3AdgroupNegativewordsApiAddRequest): Promise<ApiResponse<AdgroupNegativewordsAddResponseData>>;
    get(request: V3AdgroupNegativewordsApiGetRequest): Promise<AdgroupNegativewordsGetResponseData>;
    getWithHttpInfo(request: V3AdgroupNegativewordsApiGetRequest): Promise<ApiResponse<AdgroupNegativewordsGetResponseData>>;
    update(request: V3AdgroupNegativewordsApiUpdateRequest): Promise<AdgroupNegativewordsUpdateResponseData>;
    updateWithHttpInfo(request: V3AdgroupNegativewordsApiUpdateRequest): Promise<ApiResponse<AdgroupNegativewordsUpdateResponseData>>;
}
