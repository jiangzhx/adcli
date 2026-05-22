import { ApiClient, type ApiResponse } from "./client";
import type { DateRange, HourlyReportsGetResponseData } from "../model/index";
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
