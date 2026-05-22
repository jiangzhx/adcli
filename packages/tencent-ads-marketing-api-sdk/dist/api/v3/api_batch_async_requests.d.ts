import { ApiClient, type ApiResponse } from "./client";
import type { BatchAsyncRequestsAddRequest, BatchAsyncRequestsAddResponseData, BatchAsyncRequestsGetResponseData } from "../../model/v3/index";
export interface BatchAsyncRequestsApiAddRequest {
    data: BatchAsyncRequestsAddRequest;
}
export interface BatchAsyncRequestsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class BatchAsyncRequestsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BatchAsyncRequestsApiAddRequest): Promise<BatchAsyncRequestsAddResponseData>;
    addWithHttpInfo(request: BatchAsyncRequestsApiAddRequest): Promise<ApiResponse<BatchAsyncRequestsAddResponseData>>;
    get(request: BatchAsyncRequestsApiGetRequest): Promise<BatchAsyncRequestsGetResponseData>;
    getWithHttpInfo(request: BatchAsyncRequestsApiGetRequest): Promise<ApiResponse<BatchAsyncRequestsGetResponseData>>;
}
