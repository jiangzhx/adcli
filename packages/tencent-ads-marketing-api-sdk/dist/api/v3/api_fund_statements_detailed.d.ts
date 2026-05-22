import { ApiClient, type ApiResponse } from "./client";
import type { DateRangeTransaction, FundStatementsDetailedGetResponseData } from "../../model/v3/index";
export interface FundStatementsDetailedApiGetRequest {
    accountId: number | string;
    fundType: string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    primaryKey?: string;
    fields?: unknown;
}
export declare class FundStatementsDetailedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: FundStatementsDetailedApiGetRequest): Promise<FundStatementsDetailedGetResponseData>;
    getWithHttpInfo(request: FundStatementsDetailedApiGetRequest): Promise<ApiResponse<FundStatementsDetailedGetResponseData>>;
}
