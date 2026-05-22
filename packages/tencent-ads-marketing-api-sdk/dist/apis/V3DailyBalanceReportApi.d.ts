import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DailyBalanceReportGetResponseData, DateRangeTransaction } from "../models";
export interface V3DailyBalanceReportApiGetRequest {
    accountId: number | string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3DailyBalanceReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DailyBalanceReportApiGetRequest): Promise<DailyBalanceReportGetResponseData>;
    getWithHttpInfo(request: V3DailyBalanceReportApiGetRequest): Promise<ApiResponse<DailyBalanceReportGetResponseData>>;
}
