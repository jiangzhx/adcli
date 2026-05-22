import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LiveRoomComponentStatusUpdateRequest, LiveRoomComponentStatusUpdateResponseData } from "../models";
export interface V3LiveRoomComponentStatusApiUpdateRequest {
    data: LiveRoomComponentStatusUpdateRequest;
}
export declare class V3LiveRoomComponentStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3LiveRoomComponentStatusApiUpdateRequest): Promise<LiveRoomComponentStatusUpdateResponseData>;
    updateWithHttpInfo(request: V3LiveRoomComponentStatusApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentStatusUpdateResponseData>>;
}
