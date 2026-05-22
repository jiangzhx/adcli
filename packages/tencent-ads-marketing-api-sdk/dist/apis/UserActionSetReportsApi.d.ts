import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, UserActionSetReportsGetResponseData } from "../models";
export interface UserActionSetReportsApiGetRequest {
    accountId: number | string;
    userActionSetId: number | string;
    dateRange: DateRange;
    timeGranularity: string;
    aggregation?: string;
    fields?: unknown;
}
export declare class UserActionSetReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: UserActionSetReportsApiGetRequest): Promise<UserActionSetReportsGetResponseData>;
    getWithHttpInfo(request: UserActionSetReportsApiGetRequest): Promise<ApiResponse<UserActionSetReportsGetResponseData>>;
}
