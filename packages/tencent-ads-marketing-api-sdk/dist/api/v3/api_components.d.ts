import { ApiClient, type ApiResponse } from "./client";
import type { ComponentsAddRequest, ComponentsAddResponseData, ComponentsDeleteRequest, ComponentsDeleteResponseData, ComponentsGetResponseData } from "../../model/v3/index";
export interface ComponentsApiAddRequest {
    data: ComponentsAddRequest;
}
export interface ComponentsApiDeleteRequest {
    data: ComponentsDeleteRequest;
}
export interface ComponentsApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
    componentIdFilteringMode?: string;
}
export declare class ComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ComponentsApiAddRequest): Promise<ComponentsAddResponseData>;
    addWithHttpInfo(request: ComponentsApiAddRequest): Promise<ApiResponse<ComponentsAddResponseData>>;
    delete(request: ComponentsApiDeleteRequest): Promise<ComponentsDeleteResponseData>;
    deleteWithHttpInfo(request: ComponentsApiDeleteRequest): Promise<ApiResponse<ComponentsDeleteResponseData>>;
    get(request: ComponentsApiGetRequest): Promise<ComponentsGetResponseData>;
    getWithHttpInfo(request: ComponentsApiGetRequest): Promise<ApiResponse<ComponentsGetResponseData>>;
}
