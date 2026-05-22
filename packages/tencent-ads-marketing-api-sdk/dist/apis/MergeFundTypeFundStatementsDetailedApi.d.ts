import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRangeTransaction, MergeFundTypeFundStatementsDetailedGetResponseData } from "../models";
export interface MergeFundTypeFundStatementsDetailedApiGetRequest {
    accountId: number | string;
    fundType: string;
    dateRange: DateRangeTransaction;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class MergeFundTypeFundStatementsDetailedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MergeFundTypeFundStatementsDetailedApiGetRequest): Promise<MergeFundTypeFundStatementsDetailedGetResponseData>;
    getWithHttpInfo(request: MergeFundTypeFundStatementsDetailedApiGetRequest): Promise<ApiResponse<MergeFundTypeFundStatementsDetailedGetResponseData>>;
}
