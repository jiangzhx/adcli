import { ApiClient, type ApiResponse } from "./client";
import type { CreativeComponentsAddRequest, CreativeComponentsAddResponseData, CreativeComponentsDeleteRequest, CreativeComponentsDeleteResponseData, CreativeComponentsGetResponseData, CreativeComponentsUpdateRequest, CreativeComponentsUpdateResponseData, CreativeComponentsUpdateStatusRequest, CreativeComponentsUpdateStatusResponseData } from "../model/index";
export interface CreativeComponentsApiAddRequest {
    data: CreativeComponentsAddRequest;
}
export interface CreativeComponentsApiDeleteRequest {
    data: CreativeComponentsDeleteRequest;
}
export interface CreativeComponentsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface CreativeComponentsApiUpdateRequest {
    data: CreativeComponentsUpdateRequest;
}
export interface CreativeComponentsApiUpdateStatusRequest {
    data: CreativeComponentsUpdateStatusRequest;
}
export declare class CreativeComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CreativeComponentsApiAddRequest): Promise<CreativeComponentsAddResponseData>;
    addWithHttpInfo(request: CreativeComponentsApiAddRequest): Promise<ApiResponse<CreativeComponentsAddResponseData>>;
    delete(request: CreativeComponentsApiDeleteRequest): Promise<CreativeComponentsDeleteResponseData>;
    deleteWithHttpInfo(request: CreativeComponentsApiDeleteRequest): Promise<ApiResponse<CreativeComponentsDeleteResponseData>>;
    get(request: CreativeComponentsApiGetRequest): Promise<CreativeComponentsGetResponseData>;
    getWithHttpInfo(request: CreativeComponentsApiGetRequest): Promise<ApiResponse<CreativeComponentsGetResponseData>>;
    update(request: CreativeComponentsApiUpdateRequest): Promise<CreativeComponentsUpdateResponseData>;
    updateWithHttpInfo(request: CreativeComponentsApiUpdateRequest): Promise<ApiResponse<CreativeComponentsUpdateResponseData>>;
    updateStatus(request: CreativeComponentsApiUpdateStatusRequest): Promise<CreativeComponentsUpdateStatusResponseData>;
    updateStatusWithHttpInfo(request: CreativeComponentsApiUpdateStatusRequest): Promise<ApiResponse<CreativeComponentsUpdateStatusResponseData>>;
}
