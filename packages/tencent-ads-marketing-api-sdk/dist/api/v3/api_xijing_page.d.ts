import { ApiClient, type ApiResponse } from "./client";
import type { XijingPageAddRequest, XijingPageAddResponseData, XijingPageDeleteRequest, XijingPageDeleteResponseData, XijingPageUpdateRequest, XijingPageUpdateResponseData } from "../../model/v3/index";
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
    add(request: XijingPageApiAddRequest): Promise<XijingPageAddResponseData>;
    addWithHttpInfo(request: XijingPageApiAddRequest): Promise<ApiResponse<XijingPageAddResponseData>>;
    delete(request: XijingPageApiDeleteRequest): Promise<XijingPageDeleteResponseData>;
    deleteWithHttpInfo(request: XijingPageApiDeleteRequest): Promise<ApiResponse<XijingPageDeleteResponseData>>;
    update(request: XijingPageApiUpdateRequest): Promise<XijingPageUpdateResponseData>;
    updateWithHttpInfo(request: XijingPageApiUpdateRequest): Promise<ApiResponse<XijingPageUpdateResponseData>>;
}
