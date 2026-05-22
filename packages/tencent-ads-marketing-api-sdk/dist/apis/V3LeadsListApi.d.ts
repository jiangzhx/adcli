import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsListGetResponseData, TimeRange } from "../models";
export interface V3LeadsListApiGetRequest {
    accountId: number | string;
    timeRange: TimeRange;
    page?: number;
    pageSize?: number;
    lastSearchAfterValues?: unknown;
    fields?: unknown;
}
export declare class V3LeadsListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsListApiGetRequest): Promise<LeadsListGetResponseData>;
    getWithHttpInfo(request: V3LeadsListApiGetRequest): Promise<ApiResponse<LeadsListGetResponseData>>;
}
