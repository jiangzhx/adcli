import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DailyReportsGetResponseData, ReportDateRange } from "../models";
export interface DailyReportsApiGetRequest {
    accountId: number | string;
    level: string;
    dateRange: ReportDateRange;
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
    timeLine?: string;
    fields?: unknown;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    adqAccountsUpgradeEnabled?: boolean;
}
export declare class DailyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DailyReportsApiGetRequest): Promise<DailyReportsGetResponseData>;
    getWithHttpInfo(request: DailyReportsApiGetRequest): Promise<ApiResponse<DailyReportsGetResponseData>>;
}
