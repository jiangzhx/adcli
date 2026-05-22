import { ApiClient, type ApiResponse } from "./client";
import type { LeadsStatusUpdateRequest, LeadsStatusUpdateResponseData } from "../../model/v3/index";
export interface LeadsStatusApiUpdateRequest {
    data: LeadsStatusUpdateRequest;
}
export declare class LeadsStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: LeadsStatusApiUpdateRequest): Promise<LeadsStatusUpdateResponseData>;
    updateWithHttpInfo(request: LeadsStatusApiUpdateRequest): Promise<ApiResponse<LeadsStatusUpdateResponseData>>;
}
