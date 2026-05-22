import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AsyncTasksAddRequest, AsyncTasksAddResponseData, AsyncTasksGetResponseData } from "../models";
export interface V3AsyncTasksApiAddRequest {
    data: AsyncTasksAddRequest;
}
export interface V3AsyncTasksApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3AsyncTasksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AsyncTasksApiAddRequest): Promise<AsyncTasksAddResponseData>;
    addWithHttpInfo(request: V3AsyncTasksApiAddRequest): Promise<ApiResponse<AsyncTasksAddResponseData>>;
    get(request: V3AsyncTasksApiGetRequest): Promise<AsyncTasksGetResponseData>;
    getWithHttpInfo(request: V3AsyncTasksApiGetRequest): Promise<ApiResponse<AsyncTasksGetResponseData>>;
}
