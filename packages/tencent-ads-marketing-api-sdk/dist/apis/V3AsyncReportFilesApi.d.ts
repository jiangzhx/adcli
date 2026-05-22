import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface V3AsyncReportFilesApiGetRequest {
    taskId: number | string;
    fileId: number | string;
    accountId?: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3AsyncReportFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AsyncReportFilesApiGetRequest): Promise<string>;
    getWithHttpInfo(request: V3AsyncReportFilesApiGetRequest): Promise<ApiResponse<string>>;
}
