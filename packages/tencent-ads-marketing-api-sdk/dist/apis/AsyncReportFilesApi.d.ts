import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface AsyncReportFilesApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    fileId: number | string;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
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
