import { ApiClient, type ApiResponse } from "./client";
import type { DynamicCreativesAddRequest, DynamicCreativesAddResponseData, DynamicCreativesDeleteRequest, DynamicCreativesDeleteResponseData, DynamicCreativesGetResponseData, DynamicCreativesUpdateRequest, DynamicCreativesUpdateResponseData } from "../../model/v3/index";
export interface DynamicCreativesApiAddRequest {
    data: DynamicCreativesAddRequest;
}
export interface DynamicCreativesApiDeleteRequest {
    data: DynamicCreativesDeleteRequest;
}
export interface DynamicCreativesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
    isDeleted?: boolean;
    paginationMode?: string;
    cursor?: string;
}
export interface DynamicCreativesApiUpdateRequest {
    data: DynamicCreativesUpdateRequest;
}
export declare class DynamicCreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DynamicCreativesApiAddRequest): Promise<DynamicCreativesAddResponseData>;
    addWithHttpInfo(request: DynamicCreativesApiAddRequest): Promise<ApiResponse<DynamicCreativesAddResponseData>>;
    delete(request: DynamicCreativesApiDeleteRequest): Promise<DynamicCreativesDeleteResponseData>;
    deleteWithHttpInfo(request: DynamicCreativesApiDeleteRequest): Promise<ApiResponse<DynamicCreativesDeleteResponseData>>;
    get(request: DynamicCreativesApiGetRequest): Promise<DynamicCreativesGetResponseData>;
    getWithHttpInfo(request: DynamicCreativesApiGetRequest): Promise<ApiResponse<DynamicCreativesGetResponseData>>;
    update(request: DynamicCreativesApiUpdateRequest): Promise<DynamicCreativesUpdateResponseData>;
    updateWithHttpInfo(request: DynamicCreativesApiUpdateRequest): Promise<ApiResponse<DynamicCreativesUpdateResponseData>>;
}
