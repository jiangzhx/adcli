import { ApiClient, type ApiResponse } from "./client";
import type { DailyReportsGetResponseData, ReportDateRange } from "../model/index";
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
