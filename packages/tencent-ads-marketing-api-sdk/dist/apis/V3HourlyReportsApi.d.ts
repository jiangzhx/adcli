import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { HourlyReportDateRange, HourlyReportsGetResponseData } from "../models";
export interface V3HourlyReportsApiGetRequest {
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
export declare class V3HourlyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3HourlyReportsApiGetRequest): Promise<HourlyReportsGetResponseData>;
    getWithHttpInfo(request: V3HourlyReportsApiGetRequest): Promise<ApiResponse<HourlyReportsGetResponseData>>;
}
