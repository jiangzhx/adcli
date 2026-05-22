import { ApiClient, type ApiResponse } from "./client";
import type { LocalStoresAddRequest, LocalStoresAddResponseData, LocalStoresDeleteRequest, LocalStoresDeleteResponseData, LocalStoresGetResponseData, LocalStoresUpdateRequest, LocalStoresUpdateResponseData } from "../model/index";
export interface LocalStoresApiAddRequest {
    data: LocalStoresAddRequest;
}
export interface LocalStoresApiDeleteRequest {
    data: LocalStoresDeleteRequest;
}
export interface LocalStoresApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface LocalStoresApiUpdateRequest {
    data: LocalStoresUpdateRequest;
}
export declare class LocalStoresApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LocalStoresApiAddRequest): Promise<LocalStoresAddResponseData>;
    addWithHttpInfo(request: LocalStoresApiAddRequest): Promise<ApiResponse<LocalStoresAddResponseData>>;
    delete(request: LocalStoresApiDeleteRequest): Promise<LocalStoresDeleteResponseData>;
    deleteWithHttpInfo(request: LocalStoresApiDeleteRequest): Promise<ApiResponse<LocalStoresDeleteResponseData>>;
    get(request: LocalStoresApiGetRequest): Promise<LocalStoresGetResponseData>;
    getWithHttpInfo(request: LocalStoresApiGetRequest): Promise<ApiResponse<LocalStoresGetResponseData>>;
    update(request: LocalStoresApiUpdateRequest): Promise<LocalStoresUpdateResponseData>;
    updateWithHttpInfo(request: LocalStoresApiUpdateRequest): Promise<ApiResponse<LocalStoresUpdateResponseData>>;
}
