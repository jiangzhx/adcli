import { ApiClient, type ApiResponse } from "./client";
import type { SearchDynamicCreativesAddRequest, SearchDynamicCreativesAddResponseData, SearchDynamicCreativesUpdateRequest, SearchDynamicCreativesUpdateResponseData } from "../../model/v3/index";
export interface SearchDynamicCreativesApiAddRequest {
    data: SearchDynamicCreativesAddRequest;
}
export interface SearchDynamicCreativesApiUpdateRequest {
    data: SearchDynamicCreativesUpdateRequest;
}
export declare class SearchDynamicCreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: SearchDynamicCreativesApiAddRequest): Promise<SearchDynamicCreativesAddResponseData>;
    addWithHttpInfo(request: SearchDynamicCreativesApiAddRequest): Promise<ApiResponse<SearchDynamicCreativesAddResponseData>>;
    update(request: SearchDynamicCreativesApiUpdateRequest): Promise<SearchDynamicCreativesUpdateResponseData>;
    updateWithHttpInfo(request: SearchDynamicCreativesApiUpdateRequest): Promise<ApiResponse<SearchDynamicCreativesUpdateResponseData>>;
}
