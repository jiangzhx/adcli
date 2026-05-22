import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LiveRoomComponentsAddRequest, LiveRoomComponentsAddResponseData, LiveRoomComponentsDeleteRequest, LiveRoomComponentsDeleteResponseData, LiveRoomComponentsGetResponseData, LiveRoomComponentsUpdateRequest, LiveRoomComponentsUpdateResponseData } from "../models";
export interface V3LiveRoomComponentsApiAddRequest {
    data: LiveRoomComponentsAddRequest;
}
export interface V3LiveRoomComponentsApiDeleteRequest {
    data: LiveRoomComponentsDeleteRequest;
}
export interface V3LiveRoomComponentsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3LiveRoomComponentsApiUpdateRequest {
    data: LiveRoomComponentsUpdateRequest;
}
export declare class V3LiveRoomComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LiveRoomComponentsApiAddRequest): Promise<LiveRoomComponentsAddResponseData>;
    addWithHttpInfo(request: V3LiveRoomComponentsApiAddRequest): Promise<ApiResponse<LiveRoomComponentsAddResponseData>>;
    delete(request: V3LiveRoomComponentsApiDeleteRequest): Promise<LiveRoomComponentsDeleteResponseData>;
    deleteWithHttpInfo(request: V3LiveRoomComponentsApiDeleteRequest): Promise<ApiResponse<LiveRoomComponentsDeleteResponseData>>;
    get(request: V3LiveRoomComponentsApiGetRequest): Promise<LiveRoomComponentsGetResponseData>;
    getWithHttpInfo(request: V3LiveRoomComponentsApiGetRequest): Promise<ApiResponse<LiveRoomComponentsGetResponseData>>;
    update(request: V3LiveRoomComponentsApiUpdateRequest): Promise<LiveRoomComponentsUpdateResponseData>;
    updateWithHttpInfo(request: V3LiveRoomComponentsApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentsUpdateResponseData>>;
}
