import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DailyReportsGetResponseData, ReportDateRange } from "../models";
export interface V3DailyReportsApiGetRequest {
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
export declare class V3DailyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DailyReportsApiGetRequest): Promise<DailyReportsGetResponseData>;
    getWithHttpInfo(request: V3DailyReportsApiGetRequest): Promise<ApiResponse<DailyReportsGetResponseData>>;
}
