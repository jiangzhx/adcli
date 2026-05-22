import { ApiClient, type ApiResponse } from "./client";
export interface AsyncReportFilesApiGetRequest {
    taskId: number | string;
    fileId: number | string;
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class AsyncReportFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AsyncReportFilesApiGetRequest): Promise<string>;
    getWithHttpInfo(request: AsyncReportFilesApiGetRequest): Promise<ApiResponse<string>>;
}
