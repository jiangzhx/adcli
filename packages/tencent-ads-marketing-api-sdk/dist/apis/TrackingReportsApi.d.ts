import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, TrackingReportsGetResponseData } from "../models";
export interface TrackingReportsApiGetRequest {
    accountId: number | string;
    dateRange: DateRange;
    timeGranularity?: string;
    promotedObjectType?: string;
    promotedObjectId?: string;
    feedbackUrl?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class TrackingReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TrackingReportsApiGetRequest): Promise<TrackingReportsGetResponseData>;
    getWithHttpInfo(request: TrackingReportsApiGetRequest): Promise<ApiResponse<TrackingReportsGetResponseData>>;
}
