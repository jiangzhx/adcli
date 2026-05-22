import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallRecordGetResponseData } from "../../model/v3/index";
export interface LeadsCallRecordApiGetRequest {
    accountId: number | string;
    leadsId?: number | string;
    outerLeadsId?: string;
    requestId?: string;
    contactId?: string;
    fields?: unknown;
}
export declare class LeadsCallRecordApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData>;
    getWithHttpInfo(request: LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>>;
}
