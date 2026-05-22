import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallRecordsGetResponseData } from "../../model/v3/index";
export interface LeadsCallRecordsApiGetRequest {
    accountId: number | string;
    pageSize: number;
    page: number;
    startDate: string;
    endDate: string;
    searchAfter?: string;
    fields?: unknown;
}
export declare class LeadsCallRecordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData>;
    getWithHttpInfo(request: LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>>;
}
