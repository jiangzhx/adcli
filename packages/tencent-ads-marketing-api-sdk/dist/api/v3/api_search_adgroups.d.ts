import { ApiClient, type ApiResponse } from "./client";
import type { SearchAdgroupsAddRequest, SearchAdgroupsAddResponseData, SearchAdgroupsUpdateRequest, SearchAdgroupsUpdateResponseData } from "../../model/v3/index";
export interface SearchAdgroupsApiAddRequest {
    data: SearchAdgroupsAddRequest;
}
export interface SearchAdgroupsApiUpdateRequest {
    data: SearchAdgroupsUpdateRequest;
}
export declare class SearchAdgroupsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: SearchAdgroupsApiAddRequest): Promise<SearchAdgroupsAddResponseData>;
    addWithHttpInfo(request: SearchAdgroupsApiAddRequest): Promise<ApiResponse<SearchAdgroupsAddResponseData>>;
    update(request: SearchAdgroupsApiUpdateRequest): Promise<SearchAdgroupsUpdateResponseData>;
    updateWithHttpInfo(request: SearchAdgroupsApiUpdateRequest): Promise<ApiResponse<SearchAdgroupsUpdateResponseData>>;
}
