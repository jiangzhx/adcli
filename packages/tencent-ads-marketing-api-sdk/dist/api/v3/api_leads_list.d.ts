import { ApiClient, type ApiResponse } from "./client";
import type { LeadsListGetResponseData, TimeRange } from "../../model/v3/index";
export interface LeadsListApiGetRequest {
    accountId: number | string;
    timeRange: TimeRange;
    page?: number;
    pageSize?: number;
    lastSearchAfterValues?: unknown;
    fields?: unknown;
}
export declare class LeadsListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsListApiGetRequest): Promise<LeadsListGetResponseData>;
    getWithHttpInfo(request: LeadsListApiGetRequest): Promise<ApiResponse<LeadsListGetResponseData>>;
}
