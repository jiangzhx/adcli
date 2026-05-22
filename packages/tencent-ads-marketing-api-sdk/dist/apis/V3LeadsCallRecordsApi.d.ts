import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordsGetResponseData } from "../models";
export interface V3LeadsCallRecordsApiGetRequest {
    accountId: number | string;
    pageSize: number;
    page: number;
    startDate: string;
    endDate: string;
    searchAfter?: string;
    fields?: unknown;
}
export declare class V3LeadsCallRecordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData>;
    getWithHttpInfo(request: V3LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>>;
}
