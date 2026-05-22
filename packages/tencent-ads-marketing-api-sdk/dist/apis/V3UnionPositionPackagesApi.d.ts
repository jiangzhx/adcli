import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UnionPositionPackagesAddRequest, UnionPositionPackagesAddResponseData, UnionPositionPackagesDeleteRequest, UnionPositionPackagesGetResponseData, UnionPositionPackagesUpdateRequest, UnionPositionPackagesUpdateResponseData } from "../models";
export interface V3UnionPositionPackagesApiAddRequest {
    data: UnionPositionPackagesAddRequest;
}
export interface V3UnionPositionPackagesApiDeleteRequest {
    data: UnionPositionPackagesDeleteRequest;
}
export interface V3UnionPositionPackagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3UnionPositionPackagesApiUpdateRequest {
    data: UnionPositionPackagesUpdateRequest;
}
export declare class V3UnionPositionPackagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3UnionPositionPackagesApiAddRequest): Promise<UnionPositionPackagesAddResponseData>;
    addWithHttpInfo(request: V3UnionPositionPackagesApiAddRequest): Promise<ApiResponse<UnionPositionPackagesAddResponseData>>;
    delete(request: V3UnionPositionPackagesApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3UnionPositionPackagesApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: V3UnionPositionPackagesApiGetRequest): Promise<UnionPositionPackagesGetResponseData>;
    getWithHttpInfo(request: V3UnionPositionPackagesApiGetRequest): Promise<ApiResponse<UnionPositionPackagesGetResponseData>>;
    update(request: V3UnionPositionPackagesApiUpdateRequest): Promise<UnionPositionPackagesUpdateResponseData>;
    updateWithHttpInfo(request: V3UnionPositionPackagesApiUpdateRequest): Promise<ApiResponse<UnionPositionPackagesUpdateResponseData>>;
}
