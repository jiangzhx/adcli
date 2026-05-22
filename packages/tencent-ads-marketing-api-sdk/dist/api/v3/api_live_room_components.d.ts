import { ApiClient, type ApiResponse } from "./client";
import type { LiveRoomComponentsAddRequest, LiveRoomComponentsAddResponseData, LiveRoomComponentsDeleteRequest, LiveRoomComponentsDeleteResponseData, LiveRoomComponentsGetResponseData, LiveRoomComponentsUpdateRequest, LiveRoomComponentsUpdateResponseData } from "../../model/v3/index";
export interface LiveRoomComponentsApiAddRequest {
    data: LiveRoomComponentsAddRequest;
}
export interface LiveRoomComponentsApiDeleteRequest {
    data: LiveRoomComponentsDeleteRequest;
}
export interface LiveRoomComponentsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface LiveRoomComponentsApiUpdateRequest {
    data: LiveRoomComponentsUpdateRequest;
}
export declare class LiveRoomComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LiveRoomComponentsApiAddRequest): Promise<LiveRoomComponentsAddResponseData>;
    addWithHttpInfo(request: LiveRoomComponentsApiAddRequest): Promise<ApiResponse<LiveRoomComponentsAddResponseData>>;
    delete(request: LiveRoomComponentsApiDeleteRequest): Promise<LiveRoomComponentsDeleteResponseData>;
    deleteWithHttpInfo(request: LiveRoomComponentsApiDeleteRequest): Promise<ApiResponse<LiveRoomComponentsDeleteResponseData>>;
    get(request: LiveRoomComponentsApiGetRequest): Promise<LiveRoomComponentsGetResponseData>;
    getWithHttpInfo(request: LiveRoomComponentsApiGetRequest): Promise<ApiResponse<LiveRoomComponentsGetResponseData>>;
    update(request: LiveRoomComponentsApiUpdateRequest): Promise<LiveRoomComponentsUpdateResponseData>;
    updateWithHttpInfo(request: LiveRoomComponentsApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentsUpdateResponseData>>;
}
