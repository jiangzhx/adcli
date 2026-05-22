import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresAddRequest, LocalStoresAddResponseData, LocalStoresDeleteRequest, LocalStoresDeleteResponseData, LocalStoresGetResponseData, LocalStoresUpdateRequest, LocalStoresUpdateResponseData } from "../models";
export interface V3LocalStoresApiAddRequest {
    data: LocalStoresAddRequest;
}
export interface V3LocalStoresApiDeleteRequest {
    data: LocalStoresDeleteRequest;
}
export interface V3LocalStoresApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3LocalStoresApiUpdateRequest {
    data: LocalStoresUpdateRequest;
}
export declare class V3LocalStoresApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LocalStoresApiAddRequest): Promise<LocalStoresAddResponseData>;
    addWithHttpInfo(request: V3LocalStoresApiAddRequest): Promise<ApiResponse<LocalStoresAddResponseData>>;
    delete(request: V3LocalStoresApiDeleteRequest): Promise<LocalStoresDeleteResponseData>;
    deleteWithHttpInfo(request: V3LocalStoresApiDeleteRequest): Promise<ApiResponse<LocalStoresDeleteResponseData>>;
    get(request: V3LocalStoresApiGetRequest): Promise<LocalStoresGetResponseData>;
    getWithHttpInfo(request: V3LocalStoresApiGetRequest): Promise<ApiResponse<LocalStoresGetResponseData>>;
    update(request: V3LocalStoresApiUpdateRequest): Promise<LocalStoresUpdateResponseData>;
    updateWithHttpInfo(request: V3LocalStoresApiUpdateRequest): Promise<ApiResponse<LocalStoresUpdateResponseData>>;
}
