import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativesAddRequest, DynamicCreativesAddResponseData, DynamicCreativesDeleteRequest, DynamicCreativesDeleteResponseData, DynamicCreativesGetResponseData, DynamicCreativesUpdateRequest, DynamicCreativesUpdateResponseData } from "../models";
export interface V3DynamicCreativesApiAddRequest {
    data: DynamicCreativesAddRequest;
}
export interface V3DynamicCreativesApiDeleteRequest {
    data: DynamicCreativesDeleteRequest;
}
export interface V3DynamicCreativesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
    isDeleted?: boolean;
    paginationMode?: string;
    cursor?: string;
}
export interface V3DynamicCreativesApiUpdateRequest {
    data: DynamicCreativesUpdateRequest;
}
export declare class V3DynamicCreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3DynamicCreativesApiAddRequest): Promise<DynamicCreativesAddResponseData>;
    addWithHttpInfo(request: V3DynamicCreativesApiAddRequest): Promise<ApiResponse<DynamicCreativesAddResponseData>>;
    delete(request: V3DynamicCreativesApiDeleteRequest): Promise<DynamicCreativesDeleteResponseData>;
    deleteWithHttpInfo(request: V3DynamicCreativesApiDeleteRequest): Promise<ApiResponse<DynamicCreativesDeleteResponseData>>;
    get(request: V3DynamicCreativesApiGetRequest): Promise<DynamicCreativesGetResponseData>;
    getWithHttpInfo(request: V3DynamicCreativesApiGetRequest): Promise<ApiResponse<DynamicCreativesGetResponseData>>;
    update(request: V3DynamicCreativesApiUpdateRequest): Promise<DynamicCreativesUpdateResponseData>;
    updateWithHttpInfo(request: V3DynamicCreativesApiUpdateRequest): Promise<ApiResponse<DynamicCreativesUpdateResponseData>>;
}
