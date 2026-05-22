import { ApiClient, type ApiResponse } from "./client";
import type { DailyBalanceReportGetResponseData, DateRangeTransaction } from "../model/index";
export interface DailyBalanceReportApiGetRequest {
    accountId: number | string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class DailyBalanceReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DailyBalanceReportApiGetRequest): Promise<DailyBalanceReportGetResponseData>;
    getWithHttpInfo(request: DailyBalanceReportApiGetRequest): Promise<ApiResponse<DailyBalanceReportGetResponseData>>;
}
