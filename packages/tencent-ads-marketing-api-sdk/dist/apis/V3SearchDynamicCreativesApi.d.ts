import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SearchDynamicCreativesAddRequest, SearchDynamicCreativesAddResponseData, SearchDynamicCreativesUpdateRequest, SearchDynamicCreativesUpdateResponseData } from "../models";
export interface V3SearchDynamicCreativesApiAddRequest {
    data: SearchDynamicCreativesAddRequest;
}
export interface V3SearchDynamicCreativesApiUpdateRequest {
    data: SearchDynamicCreativesUpdateRequest;
}
export declare class V3SearchDynamicCreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3SearchDynamicCreativesApiAddRequest): Promise<SearchDynamicCreativesAddResponseData>;
    addWithHttpInfo(request: V3SearchDynamicCreativesApiAddRequest): Promise<ApiResponse<SearchDynamicCreativesAddResponseData>>;
    update(request: V3SearchDynamicCreativesApiUpdateRequest): Promise<SearchDynamicCreativesUpdateResponseData>;
    updateWithHttpInfo(request: V3SearchDynamicCreativesApiUpdateRequest): Promise<ApiResponse<SearchDynamicCreativesUpdateResponseData>>;
}
