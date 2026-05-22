import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsStatusUpdateRequest, LeadsStatusUpdateResponseData } from "../models";
export interface V3LeadsStatusApiUpdateRequest {
    data: LeadsStatusUpdateRequest;
}
export declare class V3LeadsStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3LeadsStatusApiUpdateRequest): Promise<LeadsStatusUpdateResponseData>;
    updateWithHttpInfo(request: V3LeadsStatusApiUpdateRequest): Promise<ApiResponse<LeadsStatusUpdateResponseData>>;
}
