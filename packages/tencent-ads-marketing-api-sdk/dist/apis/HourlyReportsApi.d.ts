import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, HourlyReportsGetResponseData } from "../models";
export interface HourlyReportsApiGetRequest {
    accountId: number | string;
    level: string;
    dateRange: DateRange;
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
    timeLine?: string;
    fields?: unknown;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    adqAccountsUpgradeEnabled?: boolean;
}
export declare class HourlyReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: HourlyReportsApiGetRequest): Promise<HourlyReportsGetResponseData>;
    getWithHttpInfo(request: HourlyReportsApiGetRequest): Promise<ApiResponse<HourlyReportsGetResponseData>>;
}
