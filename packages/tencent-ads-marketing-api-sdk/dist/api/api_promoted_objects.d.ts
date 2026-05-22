import { ApiClient, type ApiResponse } from "./client";
import type { PromotedObjectsAddRequest, PromotedObjectsAddResponseData, PromotedObjectsAuthorizeRequest, PromotedObjectsAuthorizeResponseData, PromotedObjectsDeleteRequest, PromotedObjectsDeleteResponseData, PromotedObjectsGetResponseData, PromotedObjectsUpdateRequest, PromotedObjectsUpdateResponseData } from "../model/index";
export interface PromotedObjectsApiAddRequest {
    data: PromotedObjectsAddRequest;
}
export interface PromotedObjectsApiAuthorizeRequest {
    data: PromotedObjectsAuthorizeRequest;
}
export interface PromotedObjectsApiDeleteRequest {
    data: PromotedObjectsDeleteRequest;
}
export interface PromotedObjectsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface PromotedObjectsApiUpdateRequest {
    data: PromotedObjectsUpdateRequest;
}
export declare class PromotedObjectsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PromotedObjectsApiAddRequest): Promise<PromotedObjectsAddResponseData>;
    addWithHttpInfo(request: PromotedObjectsApiAddRequest): Promise<ApiResponse<PromotedObjectsAddResponseData>>;
    authorize(request: PromotedObjectsApiAuthorizeRequest): Promise<PromotedObjectsAuthorizeResponseData>;
    authorizeWithHttpInfo(request: PromotedObjectsApiAuthorizeRequest): Promise<ApiResponse<PromotedObjectsAuthorizeResponseData>>;
    delete(request: PromotedObjectsApiDeleteRequest): Promise<PromotedObjectsDeleteResponseData>;
    deleteWithHttpInfo(request: PromotedObjectsApiDeleteRequest): Promise<ApiResponse<PromotedObjectsDeleteResponseData>>;
    get(request: PromotedObjectsApiGetRequest): Promise<PromotedObjectsGetResponseData>;
    getWithHttpInfo(request: PromotedObjectsApiGetRequest): Promise<ApiResponse<PromotedObjectsGetResponseData>>;
    update(request: PromotedObjectsApiUpdateRequest): Promise<PromotedObjectsUpdateResponseData>;
    updateWithHttpInfo(request: PromotedObjectsApiUpdateRequest): Promise<ApiResponse<PromotedObjectsUpdateResponseData>>;
}
