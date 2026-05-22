import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordGetResponseData } from "../models";
export interface V3LeadsCallRecordApiGetRequest {
    accountId: number | string;
    leadsId?: number | string;
    outerLeadsId?: string;
    requestId?: string;
    contactId?: string;
    fields?: unknown;
}
export declare class V3LeadsCallRecordApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData>;
    getWithHttpInfo(request: V3LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>>;
}
