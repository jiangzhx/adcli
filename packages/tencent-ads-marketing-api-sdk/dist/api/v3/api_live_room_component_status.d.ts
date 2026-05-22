import { ApiClient, type ApiResponse } from "./client";
import type { LiveRoomComponentStatusUpdateRequest, LiveRoomComponentStatusUpdateResponseData } from "../../model/v3/index";
export interface LiveRoomComponentStatusApiUpdateRequest {
    data: LiveRoomComponentStatusUpdateRequest;
}
export declare class LiveRoomComponentStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: LiveRoomComponentStatusApiUpdateRequest): Promise<LiveRoomComponentStatusUpdateResponseData>;
    updateWithHttpInfo(request: LiveRoomComponentStatusApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentStatusUpdateResponseData>>;
}
