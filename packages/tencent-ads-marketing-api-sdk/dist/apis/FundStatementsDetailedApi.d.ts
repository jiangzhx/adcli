import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRangeTransaction, FundStatementsDetailedGetResponseData } from "../models";
export interface FundStatementsDetailedApiGetRequest {
    accountId: number | string;
    fundType: string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
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
