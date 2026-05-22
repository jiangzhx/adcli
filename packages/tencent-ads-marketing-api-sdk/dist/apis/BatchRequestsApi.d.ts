import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchRequestsAddRequest, BatchRequestsAddResponseData } from "../models";
export interface BatchRequestsApiAddRequest {
    data: BatchRequestsAddRequest;
}
export declare class BatchRequestsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BatchRequestsApiAddRequest): Promise<BatchRequestsAddResponseData>;
    addWithHttpInfo(request: BatchRequestsApiAddRequest): Promise<ApiResponse<BatchRequestsAddResponseData>>;
}
