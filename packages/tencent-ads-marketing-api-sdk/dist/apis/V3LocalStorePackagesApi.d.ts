import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStorePackagesAddRequest, LocalStorePackagesAddResponseData, LocalStorePackagesDeleteRequest, LocalStorePackagesDeleteResponseData, LocalStorePackagesGetResponseData, LocalStorePackagesUpdateRequest, LocalStorePackagesUpdateResponseData } from "../models";
export interface V3LocalStorePackagesApiAddRequest {
    data: LocalStorePackagesAddRequest;
}
export interface V3LocalStorePackagesApiDeleteRequest {
    data: LocalStorePackagesDeleteRequest;
}
export interface V3LocalStorePackagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3LocalStorePackagesApiUpdateRequest {
    data: LocalStorePackagesUpdateRequest;
}
export declare class V3LocalStorePackagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LocalStorePackagesApiAddRequest): Promise<LocalStorePackagesAddResponseData>;
    addWithHttpInfo(request: V3LocalStorePackagesApiAddRequest): Promise<ApiResponse<LocalStorePackagesAddResponseData>>;
    delete(request: V3LocalStorePackagesApiDeleteRequest): Promise<LocalStorePackagesDeleteResponseData>;
    deleteWithHttpInfo(request: V3LocalStorePackagesApiDeleteRequest): Promise<ApiResponse<LocalStorePackagesDeleteResponseData>>;
    get(request: V3LocalStorePackagesApiGetRequest): Promise<LocalStorePackagesGetResponseData>;
    getWithHttpInfo(request: V3LocalStorePackagesApiGetRequest): Promise<ApiResponse<LocalStorePackagesGetResponseData>>;
    update(request: V3LocalStorePackagesApiUpdateRequest): Promise<LocalStorePackagesUpdateResponseData>;
    updateWithHttpInfo(request: V3LocalStorePackagesApiUpdateRequest): Promise<ApiResponse<LocalStorePackagesUpdateResponseData>>;
}
