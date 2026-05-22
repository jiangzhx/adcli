import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallRecordsGetRequest, LeadsCallRecordsGetResponseData } from "../model/index";
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
