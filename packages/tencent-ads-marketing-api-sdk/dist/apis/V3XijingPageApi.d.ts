import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageAddRequest, XijingPageAddResponseData, XijingPageDeleteRequest, XijingPageDeleteResponseData, XijingPageUpdateRequest, XijingPageUpdateResponseData } from "../models";
export interface V3XijingPageApiAddRequest {
    data: XijingPageAddRequest;
}
export interface V3XijingPageApiDeleteRequest {
    data: XijingPageDeleteRequest;
}
export interface V3XijingPageApiUpdateRequest {
    data: XijingPageUpdateRequest;
}
export declare class V3XijingPageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3XijingPageApiAddRequest): Promise<XijingPageAddResponseData>;
    addWithHttpInfo(request: V3XijingPageApiAddRequest): Promise<ApiResponse<XijingPageAddResponseData>>;
    delete(request: V3XijingPageApiDeleteRequest): Promise<XijingPageDeleteResponseData>;
    deleteWithHttpInfo(request: V3XijingPageApiDeleteRequest): Promise<ApiResponse<XijingPageDeleteResponseData>>;
    update(request: V3XijingPageApiUpdateRequest): Promise<XijingPageUpdateResponseData>;
    updateWithHttpInfo(request: V3XijingPageApiUpdateRequest): Promise<ApiResponse<XijingPageUpdateResponseData>>;
}
