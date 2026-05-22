import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchOperationAddRequest } from "../models";
export interface BatchOperationApiAddRequest {
    data: BatchOperationAddRequest;
}
export declare class BatchOperationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BatchOperationApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: BatchOperationApiAddRequest): Promise<ApiResponse<unknown>>;
}
