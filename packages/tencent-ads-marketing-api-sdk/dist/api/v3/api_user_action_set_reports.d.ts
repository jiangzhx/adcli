import { ApiClient, type ApiResponse } from "./client";
import type { DateRangeDn, UserActionSetReportsGetResponseData } from "../../model/v3/index";
export interface UserActionSetReportsApiGetRequest {
    accountId: number | string;
    userActionSetId: number | string;
    dateRange: DateRangeDn;
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
