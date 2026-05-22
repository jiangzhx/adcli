import { ApiClient, type ApiResponse } from "./client";
import type { AdUnionReportsGetResponseData, ReportDateRange } from "../../model/v3/index";
export interface AdUnionReportsApiGetRequest {
    accountId: number | string;
    dateRange: ReportDateRange;
    fields: string[];
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
}
export declare class AdUnionReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdUnionReportsApiGetRequest): Promise<AdUnionReportsGetResponseData>;
    getWithHttpInfo(request: AdUnionReportsApiGetRequest): Promise<ApiResponse<AdUnionReportsGetResponseData>>;
}
