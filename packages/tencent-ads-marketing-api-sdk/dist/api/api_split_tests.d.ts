import { ApiClient, type ApiResponse } from "./client";
import type { SplitTestsAddRequest, SplitTestsAddResponseData, SplitTestsDeleteRequest, SplitTestsDeleteResponseData, SplitTestsGetResponseData, SplitTestsUpdateRequest, SplitTestsUpdateResponseData } from "../model/index";
export interface SplitTestsApiAddRequest {
    data: SplitTestsAddRequest;
}
export interface SplitTestsApiDeleteRequest {
    data: SplitTestsDeleteRequest;
}
export interface SplitTestsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface SplitTestsApiUpdateRequest {
    data: SplitTestsUpdateRequest;
}
export declare class SplitTestsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: SplitTestsApiAddRequest): Promise<SplitTestsAddResponseData>;
    addWithHttpInfo(request: SplitTestsApiAddRequest): Promise<ApiResponse<SplitTestsAddResponseData>>;
    delete(request: SplitTestsApiDeleteRequest): Promise<SplitTestsDeleteResponseData>;
    deleteWithHttpInfo(request: SplitTestsApiDeleteRequest): Promise<ApiResponse<SplitTestsDeleteResponseData>>;
    get(request: SplitTestsApiGetRequest): Promise<SplitTestsGetResponseData>;
    getWithHttpInfo(request: SplitTestsApiGetRequest): Promise<ApiResponse<SplitTestsGetResponseData>>;
    update(request: SplitTestsApiUpdateRequest): Promise<SplitTestsUpdateResponseData>;
    updateWithHttpInfo(request: SplitTestsApiUpdateRequest): Promise<ApiResponse<SplitTestsUpdateResponseData>>;
}
