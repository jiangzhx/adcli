import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentsAddRequest, ComponentsAddResponseData, ComponentsDeleteRequest, ComponentsDeleteResponseData, ComponentsGetResponseData } from "../models";
export interface V3ComponentsApiAddRequest {
    data: ComponentsAddRequest;
}
export interface V3ComponentsApiDeleteRequest {
    data: ComponentsDeleteRequest;
}
export interface V3ComponentsApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
    componentIdFilteringMode?: string;
}
export declare class V3ComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ComponentsApiAddRequest): Promise<ComponentsAddResponseData>;
    addWithHttpInfo(request: V3ComponentsApiAddRequest): Promise<ApiResponse<ComponentsAddResponseData>>;
    delete(request: V3ComponentsApiDeleteRequest): Promise<ComponentsDeleteResponseData>;
    deleteWithHttpInfo(request: V3ComponentsApiDeleteRequest): Promise<ApiResponse<ComponentsDeleteResponseData>>;
    get(request: V3ComponentsApiGetRequest): Promise<ComponentsGetResponseData>;
    getWithHttpInfo(request: V3ComponentsApiGetRequest): Promise<ApiResponse<ComponentsGetResponseData>>;
}
