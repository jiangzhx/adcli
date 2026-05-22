import { ApiClient, type ApiResponse } from "./client";
import type { LocalStorePackagesAddRequest, LocalStorePackagesAddResponseData, LocalStorePackagesDeleteRequest, LocalStorePackagesDeleteResponseData, LocalStorePackagesGetResponseData, LocalStorePackagesUpdateRequest, LocalStorePackagesUpdateResponseData } from "../../model/v3/index";
export interface LocalStorePackagesApiAddRequest {
    data: LocalStorePackagesAddRequest;
}
export interface LocalStorePackagesApiDeleteRequest {
    data: LocalStorePackagesDeleteRequest;
}
export interface LocalStorePackagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface LocalStorePackagesApiUpdateRequest {
    data: LocalStorePackagesUpdateRequest;
}
export declare class LocalStorePackagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LocalStorePackagesApiAddRequest): Promise<LocalStorePackagesAddResponseData>;
    addWithHttpInfo(request: LocalStorePackagesApiAddRequest): Promise<ApiResponse<LocalStorePackagesAddResponseData>>;
    delete(request: LocalStorePackagesApiDeleteRequest): Promise<LocalStorePackagesDeleteResponseData>;
    deleteWithHttpInfo(request: LocalStorePackagesApiDeleteRequest): Promise<ApiResponse<LocalStorePackagesDeleteResponseData>>;
    get(request: LocalStorePackagesApiGetRequest): Promise<LocalStorePackagesGetResponseData>;
    getWithHttpInfo(request: LocalStorePackagesApiGetRequest): Promise<ApiResponse<LocalStorePackagesGetResponseData>>;
    update(request: LocalStorePackagesApiUpdateRequest): Promise<LocalStorePackagesUpdateResponseData>;
    updateWithHttpInfo(request: LocalStorePackagesApiUpdateRequest): Promise<ApiResponse<LocalStorePackagesUpdateResponseData>>;
}
