import { ApiClient, type ApiResponse } from "./client";
import type { HourlyReportDateRange, HourlyReportsGetResponseData } from "../../model/v3/index";
export interface HourlyReportsApiGetRequest {
    accountId: number | string;
    level: string;
    dateRange: HourlyReportDateRange;
    groupBy: string[];
    fields: string[];
    filtering?: unknown;
    orderBy?: unknown;
    timeLine?: string;
    page?: number;
    pageSize?: number;
}
export declare class HourlyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: HourlyReportsApiGetRequest): Promise<HourlyReportsGetResponseData>;
    getWithHttpInfo(request: HourlyReportsApiGetRequest): Promise<ApiResponse<HourlyReportsGetResponseData>>;
}
