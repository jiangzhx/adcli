import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchAsyncRequestsAddRequest, BatchAsyncRequestsAddResponseData, BatchAsyncRequestsGetResponseData } from "../models";
export interface V3BatchAsyncRequestsApiAddRequest {
    data: BatchAsyncRequestsAddRequest;
}
export interface V3BatchAsyncRequestsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3BatchAsyncRequestsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BatchAsyncRequestsApiAddRequest): Promise<BatchAsyncRequestsAddResponseData>;
    addWithHttpInfo(request: V3BatchAsyncRequestsApiAddRequest): Promise<ApiResponse<BatchAsyncRequestsAddResponseData>>;
    get(request: V3BatchAsyncRequestsApiGetRequest): Promise<BatchAsyncRequestsGetResponseData>;
    getWithHttpInfo(request: V3BatchAsyncRequestsApiGetRequest): Promise<ApiResponse<BatchAsyncRequestsGetResponseData>>;
}
