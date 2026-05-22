import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordGetRequest, LeadsCallRecordGetResponseData } from "../models";
export interface LeadsCallRecordApiGetRequest {
    data: LeadsCallRecordGetRequest;
}
export declare class LeadsCallRecordApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData>;
    getWithHttpInfo(request: LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>>;
}
