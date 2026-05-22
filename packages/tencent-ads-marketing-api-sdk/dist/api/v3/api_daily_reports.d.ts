import { ApiClient, type ApiResponse } from "./client";
import type { DailyReportsGetResponseData, ReportDateRange } from "../../model/v3/index";
export interface DailyReportsApiGetRequest {
    level: string;
    dateRange: ReportDateRange;
    groupBy: string[];
    fields: string[];
    accountId?: number | string;
    filtering?: unknown;
    orderBy?: unknown;
    timeLine?: string;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
}
export declare class DailyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DailyReportsApiGetRequest): Promise<DailyReportsGetResponseData>;
    getWithHttpInfo(request: DailyReportsApiGetRequest): Promise<ApiResponse<DailyReportsGetResponseData>>;
}
