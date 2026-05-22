import { ApiClient, type ApiResponse } from "./client";
import type { AsyncTasksAddRequest, AsyncTasksAddResponseData, AsyncTasksGetResponseData } from "../../model/v3/index";
export interface AsyncTasksApiAddRequest {
    data: AsyncTasksAddRequest;
}
export interface AsyncTasksApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AsyncTasksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AsyncTasksApiAddRequest): Promise<AsyncTasksAddResponseData>;
    addWithHttpInfo(request: AsyncTasksApiAddRequest): Promise<ApiResponse<AsyncTasksAddResponseData>>;
    get(request: AsyncTasksApiGetRequest): Promise<AsyncTasksGetResponseData>;
    getWithHttpInfo(request: AsyncTasksApiGetRequest): Promise<ApiResponse<AsyncTasksGetResponseData>>;
}
