import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRangeDn, UserActionSetReportsGetResponseData } from "../models";
export interface V3UserActionSetReportsApiGetRequest {
    accountId: number | string;
    userActionSetId: number | string;
    dateRange: DateRangeDn;
    timeGranularity: string;
    aggregation?: string;
    fields?: unknown;
}
export declare class V3UserActionSetReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3UserActionSetReportsApiGetRequest): Promise<UserActionSetReportsGetResponseData>;
    getWithHttpInfo(request: V3UserActionSetReportsApiGetRequest): Promise<ApiResponse<UserActionSetReportsGetResponseData>>;
}
