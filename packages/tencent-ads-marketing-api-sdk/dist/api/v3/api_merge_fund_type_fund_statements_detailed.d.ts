import { ApiClient, type ApiResponse } from "./client";
import type { DateRangeTransaction, MergeFundTypeFundStatementsDetailedGetResponseData } from "../../model/v3/index";
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
