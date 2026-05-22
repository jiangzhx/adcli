import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordsGetRequest, LeadsCallRecordsGetResponseData } from "../models";
export interface LeadsCallRecordsApiGetRequest {
    data: LeadsCallRecordsGetRequest;
}
export declare class LeadsCallRecordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData>;
    getWithHttpInfo(request: LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>>;
}
