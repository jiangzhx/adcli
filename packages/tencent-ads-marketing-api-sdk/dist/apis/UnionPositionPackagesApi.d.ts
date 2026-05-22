import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UnionPositionPackagesAddRequest, UnionPositionPackagesAddResponseData, UnionPositionPackagesDeleteRequest, UnionPositionPackagesGetResponseData, UnionPositionPackagesUpdateRequest, UnionPositionPackagesUpdateResponseData } from "../models";
export interface UnionPositionPackagesApiAddRequest {
    data: UnionPositionPackagesAddRequest;
}
export interface UnionPositionPackagesApiDeleteRequest {
    data: UnionPositionPackagesDeleteRequest;
}
export interface UnionPositionPackagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface UnionPositionPackagesApiUpdateRequest {
    data: UnionPositionPackagesUpdateRequest;
}
export declare class UnionPositionPackagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: UnionPositionPackagesApiAddRequest): Promise<UnionPositionPackagesAddResponseData>;
    addWithHttpInfo(request: UnionPositionPackagesApiAddRequest): Promise<ApiResponse<UnionPositionPackagesAddResponseData>>;
    delete(request: UnionPositionPackagesApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: UnionPositionPackagesApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: UnionPositionPackagesApiGetRequest): Promise<UnionPositionPackagesGetResponseData>;
    getWithHttpInfo(request: UnionPositionPackagesApiGetRequest): Promise<ApiResponse<UnionPositionPackagesGetResponseData>>;
    update(request: UnionPositionPackagesApiUpdateRequest): Promise<UnionPositionPackagesUpdateResponseData>;
    updateWithHttpInfo(request: UnionPositionPackagesApiUpdateRequest): Promise<ApiResponse<UnionPositionPackagesUpdateResponseData>>;
}
