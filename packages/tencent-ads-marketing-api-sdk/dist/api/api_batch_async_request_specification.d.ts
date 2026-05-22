import { ApiClient, type ApiResponse } from "./client";
import type { BatchAsyncRequestSpecificationGetResponseData } from "../model/index";
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
