import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdUnionReportsGetResponseData, ReportDateRange } from "../models";
export interface V3AdUnionReportsApiGetRequest {
    accountId: number | string;
    dateRange: ReportDateRange;
    fields: string[];
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
}
export declare class V3AdUnionReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AdUnionReportsApiGetRequest): Promise<AdUnionReportsGetResponseData>;
    getWithHttpInfo(request: V3AdUnionReportsApiGetRequest): Promise<ApiResponse<AdUnionReportsGetResponseData>>;
}
