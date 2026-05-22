import { ApiClient, type ApiResponse } from "./client";
import type { BatchRequestsAddRequest, BatchRequestsAddResponseData } from "../model/index";
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
