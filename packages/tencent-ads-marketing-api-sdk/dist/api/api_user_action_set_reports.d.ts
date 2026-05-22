import { ApiClient, type ApiResponse } from "./client";
import type { DateRange, UserActionSetReportsGetResponseData } from "../model/index";
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
