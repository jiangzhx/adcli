import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchAsyncRequestSpecificationGetResponseData } from "../models";
export interface BatchAsyncRequestSpecificationApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class BatchAsyncRequestSpecificationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BatchAsyncRequestSpecificationApiGetRequest): Promise<BatchAsyncRequestSpecificationGetResponseData>;
    getWithHttpInfo(request: BatchAsyncRequestSpecificationApiGetRequest): Promise<ApiResponse<BatchAsyncRequestSpecificationGetResponseData>>;
}
