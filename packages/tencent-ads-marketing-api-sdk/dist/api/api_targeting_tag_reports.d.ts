import { ApiClient, type ApiResponse } from "./client";
import type { ReportDateRange, TargetingTagReportsGetResponseData } from "../model/index";
export interface TargetingTagReportsApiGetRequest {
    accountId: number | string;
    type_: string;
    level: string;
    dateRange: ReportDateRange;
    posType?: string;
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
    timeLine?: string;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    adqAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export declare class TargetingTagReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetingTagReportsApiGetRequest): Promise<TargetingTagReportsGetResponseData>;
    getWithHttpInfo(request: TargetingTagReportsApiGetRequest): Promise<ApiResponse<TargetingTagReportsGetResponseData>>;
}
