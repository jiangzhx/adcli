import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DailyBalanceReportGetResponseData, DateRangeTransaction } from "../models";
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
