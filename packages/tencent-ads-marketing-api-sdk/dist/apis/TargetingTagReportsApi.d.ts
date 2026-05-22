import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportDateRange, TargetingTagReportsGetResponseData } from "../models";
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
