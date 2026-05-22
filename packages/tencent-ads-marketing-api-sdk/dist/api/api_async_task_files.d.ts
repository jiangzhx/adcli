import { ApiClient, type ApiResponse } from "./client";
export interface AsyncTaskFilesApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    fileId: number | string;
    fields?: unknown;
}
export declare class AsyncTaskFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AsyncTaskFilesApiGetRequest): Promise<string>;
    getWithHttpInfo(request: AsyncTaskFilesApiGetRequest): Promise<ApiResponse<string>>;
}
