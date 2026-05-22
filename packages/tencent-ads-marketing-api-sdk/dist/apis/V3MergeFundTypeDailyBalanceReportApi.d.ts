import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRangeTransaction, MergeFundTypeDailyBalanceReportGetResponseData } from "../models";
export interface V3MergeFundTypeDailyBalanceReportApiGetRequest {
    accountId: number | string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3MergeFundTypeDailyBalanceReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MergeFundTypeDailyBalanceReportApiGetRequest): Promise<MergeFundTypeDailyBalanceReportGetResponseData>;
    getWithHttpInfo(request: V3MergeFundTypeDailyBalanceReportApiGetRequest): Promise<ApiResponse<MergeFundTypeDailyBalanceReportGetResponseData>>;
}
