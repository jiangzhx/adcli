import { ApiClient, type ApiResponse } from "./client";
import type { BatchOperationAddRequest } from "../model/index";
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
