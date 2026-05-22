import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageAddRequest, XijingPageDeleteRequest, XijingPageUpdateRequest } from "../models";
export interface XijingPageApiAddRequest {
    data: XijingPageAddRequest;
}
export interface XijingPageApiDeleteRequest {
    data: XijingPageDeleteRequest;
}
export interface XijingPageApiUpdateRequest {
    data: XijingPageUpdateRequest;
}
export declare class XijingPageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: XijingPageApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: XijingPageApiAddRequest): Promise<ApiResponse<unknown>>;
    delete(request: XijingPageApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: XijingPageApiDeleteRequest): Promise<ApiResponse<unknown>>;
    update(request: XijingPageApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: XijingPageApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
