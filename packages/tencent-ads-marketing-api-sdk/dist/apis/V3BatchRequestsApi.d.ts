import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchRequestsAddRequest, BatchRequestsAddResponseData } from "../models";
export interface V3BatchRequestsApiAddRequest {
    data: BatchRequestsAddRequest;
}
export declare class V3BatchRequestsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BatchRequestsApiAddRequest): Promise<BatchRequestsAddResponseData>;
    addWithHttpInfo(request: V3BatchRequestsApiAddRequest): Promise<ApiResponse<BatchRequestsAddResponseData>>;
}
