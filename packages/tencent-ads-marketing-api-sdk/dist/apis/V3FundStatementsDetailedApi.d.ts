import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRangeTransaction, FundStatementsDetailedGetResponseData } from "../models";
export interface V3FundStatementsDetailedApiGetRequest {
    accountId: number | string;
    fundType: string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    primaryKey?: string;
    fields?: unknown;
}
export declare class V3FundStatementsDetailedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3FundStatementsDetailedApiGetRequest): Promise<FundStatementsDetailedGetResponseData>;
    getWithHttpInfo(request: V3FundStatementsDetailedApiGetRequest): Promise<ApiResponse<FundStatementsDetailedGetResponseData>>;
}
