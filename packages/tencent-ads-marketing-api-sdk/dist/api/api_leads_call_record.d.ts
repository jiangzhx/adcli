import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallRecordGetRequest, LeadsCallRecordGetResponseData } from "../model/index";
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
