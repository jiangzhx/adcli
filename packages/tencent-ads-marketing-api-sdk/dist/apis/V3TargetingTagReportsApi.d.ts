import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportDateRange, TargetingTagReportsGetResponseData } from "../models";
export interface V3TargetingTagReportsApiGetRequest {
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
export declare class V3TargetingTagReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3TargetingTagReportsApiGetRequest): Promise<TargetingTagReportsGetResponseData>;
    getWithHttpInfo(request: V3TargetingTagReportsApiGetRequest): Promise<ApiResponse<TargetingTagReportsGetResponseData>>;
}
