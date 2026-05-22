import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SearchAdgroupsAddRequest, SearchAdgroupsAddResponseData, SearchAdgroupsUpdateRequest, SearchAdgroupsUpdateResponseData } from "../models";
export interface V3SearchAdgroupsApiAddRequest {
    data: SearchAdgroupsAddRequest;
}
export interface V3SearchAdgroupsApiUpdateRequest {
    data: SearchAdgroupsUpdateRequest;
}
export declare class V3SearchAdgroupsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3SearchAdgroupsApiAddRequest): Promise<SearchAdgroupsAddResponseData>;
    addWithHttpInfo(request: V3SearchAdgroupsApiAddRequest): Promise<ApiResponse<SearchAdgroupsAddResponseData>>;
    update(request: V3SearchAdgroupsApiUpdateRequest): Promise<SearchAdgroupsUpdateResponseData>;
    updateWithHttpInfo(request: V3SearchAdgroupsApiUpdateRequest): Promise<ApiResponse<SearchAdgroupsUpdateResponseData>>;
}
