import { ApiClient, type ApiResponse } from "./client";
import type { CustomTagsAddRequest, CustomTagsAddResponseData, CustomTagsDeleteRequest, CustomTagsGetResponseData, CustomTagsUpdateRequest } from "../model/index";
export interface CustomTagsApiAddRequest {
    data: CustomTagsAddRequest;
}
export interface CustomTagsApiDeleteRequest {
    data: CustomTagsDeleteRequest;
}
export interface CustomTagsApiGetRequest {
    accountId: number | string;
    parentTagId?: number | string;
    tagId?: number | string;
    tagCode?: string;
    platform?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface CustomTagsApiUpdateRequest {
    data: CustomTagsUpdateRequest;
}
export declare class CustomTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CustomTagsApiAddRequest): Promise<CustomTagsAddResponseData>;
    addWithHttpInfo(request: CustomTagsApiAddRequest): Promise<ApiResponse<CustomTagsAddResponseData>>;
    delete(request: CustomTagsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: CustomTagsApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: CustomTagsApiGetRequest): Promise<CustomTagsGetResponseData>;
    getWithHttpInfo(request: CustomTagsApiGetRequest): Promise<ApiResponse<CustomTagsGetResponseData>>;
    update(request: CustomTagsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: CustomTagsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
