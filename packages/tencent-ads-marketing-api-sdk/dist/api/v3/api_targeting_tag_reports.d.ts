import { ApiClient, type ApiResponse } from "./client";
import type { ReportDateRange, TargetingTagReportsGetResponseData } from "../../model/v3/index";
export interface TargetingTagReportsApiGetRequest {
    accountId: number | string;
    type_: string;
    level: string;
    dateRange: ReportDateRange;
    groupBy: string[];
    fields: string[];
    filtering?: unknown;
    orderBy?: unknown;
    timeLine?: string;
    page?: number;
    pageSize?: number;
}
export declare class TargetingTagReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetingTagReportsApiGetRequest): Promise<TargetingTagReportsGetResponseData>;
    getWithHttpInfo(request: TargetingTagReportsApiGetRequest): Promise<ApiResponse<TargetingTagReportsGetResponseData>>;
}
