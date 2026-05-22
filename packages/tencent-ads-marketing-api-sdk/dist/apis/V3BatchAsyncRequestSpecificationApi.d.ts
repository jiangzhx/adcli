import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchAsyncRequestSpecificationGetResponseData } from "../models";
export interface V3BatchAsyncRequestSpecificationApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3BatchAsyncRequestSpecificationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BatchAsyncRequestSpecificationApiGetRequest): Promise<BatchAsyncRequestSpecificationGetResponseData>;
    getWithHttpInfo(request: V3BatchAsyncRequestSpecificationApiGetRequest): Promise<ApiResponse<BatchAsyncRequestSpecificationGetResponseData>>;
}
