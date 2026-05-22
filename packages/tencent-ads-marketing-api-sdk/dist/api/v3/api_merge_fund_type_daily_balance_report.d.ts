import { ApiClient, type ApiResponse } from "./client";
import type { DateRangeTransaction, MergeFundTypeDailyBalanceReportGetResponseData } from "../../model/v3/index";
export interface MergeFundTypeDailyBalanceReportApiGetRequest {
    accountId: number | string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class MergeFundTypeDailyBalanceReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MergeFundTypeDailyBalanceReportApiGetRequest): Promise<MergeFundTypeDailyBalanceReportGetResponseData>;
    getWithHttpInfo(request: MergeFundTypeDailyBalanceReportApiGetRequest): Promise<ApiResponse<MergeFundTypeDailyBalanceReportGetResponseData>>;
}
